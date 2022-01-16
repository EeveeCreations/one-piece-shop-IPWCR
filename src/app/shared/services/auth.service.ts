import {Injectable} from "@angular/core";
import {User} from "../models/user.model";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
  public url: string = "";
  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  private tokenExpirationTimer: number;

  constructor(private http: HttpClient,
              private router: Router) {
    this.user.subscribe(() => {
      // this.router.navigate(['/auth']);
    })
  }

  prepareURL(currentAuthenticationMethod: string) {
    this.url = "https://localhost:7004/" + currentAuthenticationMethod;
    return this.url;
  }

  autoLogIn() {
    const currentUser: {
      id: number,
      name: string,
      email: string,
      isAdmin: boolean,
      _token: string,
      _endDate: Date
    } = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      return;
    }
    const loadedUser = new User(currentUser.id, currentUser.name, currentUser.email, currentUser.isAdmin, currentUser._token, new Date(currentUser._endDate));
    const expirationDuration = new Date(currentUser._endDate).getTime() - new Date().getTime();
    this.autoLogOut(expirationDuration)
    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  logIn(email: string, password: string) {
    this.prepareURL('login')
    return this.http.post<User>(
      this.url, {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.handleError)
      , tap(dataRes => {
          this.handleAuth(
            dataRes.id,
            dataRes.name,
            dataRes.email,
            dataRes.isAdmin,
            dataRes.token,
            +dataRes.endDate);
        }
      ));
  }

  signUp(email: string, name:string,password: string, isAdmin) {
    this.prepareURL('logout')
    return this.http.post<User>(
      this.url, {
        name: name,
        email: email,
        isAdmin: isAdmin,
        password: password,
      }
    ).pipe(
      catchError(this.handleError));
  }

  private handleAuth(
    userId: number,
    email: string,
    name: string,
    isAdmin: boolean,
    token: string,
    expiresIn: number) {
    const endDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(userId, name, email, isAdmin, token, endDate)
    this.autoLogOut((expiresIn * 1000));
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.user.next(user);

  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unkown error occurd';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_TAKEN':
        errorMessage = 'This email is taken';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email is incorrect';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is incorrects';
        break;
    }
    return throwError(errorMessage);
  }

  logOut() {
    this.router.navigate(['./authenticaton']);
    this.user.next(null);
    if (this.tokenExpirationTimer) {
      clearTimeout();
    }
    localStorage.removeItem('currentUser');
  }

  autoLogOut(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDuration)
  }
}
