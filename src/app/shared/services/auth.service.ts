import {Injectable} from "@angular/core";
import {User} from "../models/user.model";
import {BehaviorSubject, catchError, map, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserRole} from "../models/user-role.model";

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
      roles: UserRole[]
      _token: string,
      _refreshToken: string
    } = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      return;
    }
    const loadedUser = new User(currentUser.id, currentUser.name, currentUser.email,
      currentUser.roles, currentUser._token, currentUser._refreshToken);
    this.autoLogOut()
    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  logIn(username: string, password: string) {
    this.prepareURL('login')
    return this.http.post<{ name: string, roles: string, accessToken: string, refreshToken: string }>(
      this.url, {
        username: username,
        password: password
      }
    ).pipe(
      catchError(this.handleError)
      , map(dataRes => {
          return this.handleAuth(
            dataRes.name,
            dataRes.roles,
            dataRes.accessToken,
            dataRes.refreshToken);
        }
      ));
  }

  signUp(email: string, name: string, password: string, roles: UserRole[]) {
    this.prepareURL('register')
    return this.http.post<{ name: string, roles: string, accessToken: string, refreshToken: string }>(
      this.url, {
        name: name,
        email: email,
        roles: roles,
        password: password,
      }
    ).pipe(
      map(dataRes =>{
        return this.handleAuth(
          dataRes.name,
          dataRes.roles,
          dataRes.accessToken,
          dataRes.refreshToken);
        }
      ),
      catchError(this.handleError));
  }

  private handleAuth(
    name: string,
    roles: string,
    token: string,
    refreshToken: string) {
    const user = new User(1, name, null, JSON.parse(roles).toArray(), token, refreshToken)
    this.autoLogOut();
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.user.next(user);
    return user;

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

  autoLogOut() {
    const MAX_MINUTES = 10 * 1000// miliseconds
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, MAX_MINUTES)
  }
}
