import {Injectable} from "@angular/core";
import {User} from "../models/user.model";
import {BehaviorSubject, catchError, map, throwError, toArray} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserRole} from "../models/user-role.model";
import {LocalStorageService} from "./local-storage.service";

@Injectable({providedIn: 'root'})
export class AuthService {
  public url: string = "";
  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  private tokenExpirationTimer;

  constructor(private http: HttpClient,
              private router: Router,
              private localStorageService: LocalStorageService) {
    this.user.subscribe(() => {
      // this.router.navigate(['/auth']);
    })
  }

  prepareURL(currentAuthenticationMethod: string) {
    this.url = "https://localhost:7004/" + currentAuthenticationMethod;
    //178.62.233.221/
    return this.url;
  }

  prepareHeader() {
    const headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.set('origin', 'http://localhost:4200');
    return headerOfRequest;
  }

  autoLogIn() {
    const loadedUser: User = this.localStorageService.getUserFromLocalStorage()
    if (!loadedUser) {
      return;
    }
    this.autoLogOut()
    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  logIn(username: string, password: string) {
    this.prepareURL('login');
    return this.http.post<{ name: string, roles: string, accessToken: string, refreshToken: string }>(
      this.url, {
      }, {
        headers: this.prepareHeader(),
        params: {
          username: username,
          passcode: password
        }
      }
    ).pipe(
      catchError(this.handleError)
      , map(dataRes => {
          console.log(dataRes);
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
        passcode: password,
      }
    ).pipe(
      map(dataRes => {
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
    const newRoles: UserRole[] =this.createRoles(roles)
    const user = new User(1, name, null, newRoles, token, refreshToken)
    this.localStorageService.storeUser(user);
    this.user.next(user);
    this.autoLogOut();
    return user;

  }

  private createRoles(roles: string): UserRole[] {
    let  newRoles: UserRole[] = []
    let id: number = 2;
    console.log(roles)
    for(const rol of roles.replace('[','').replace(']','').replace(' ','').split(",")){
      if(rol.startsWith("ADMIN")){
          id = 1;
      }
      newRoles.push(new UserRole(id,rol))
    }
    return newRoles;
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
        errorMessage = 'This password is incorrect';
        break;
    }
    return throwError(errorMessage);
  }

  logOut() {
    this.router.navigate(['./']);
    this.user.next(null);
    if (this.tokenExpirationTimer) {
      clearTimeout();
    }
    this.localStorageService.removeUser();
  }

  autoLogOut() {
    const MAX_MINUTES = 10 * 1000// miliseconds
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, MAX_MINUTES)
  }
}
