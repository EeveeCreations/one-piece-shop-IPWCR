import {Injectable} from "@angular/core";
import {User} from "../models/user.model";
import {NewUser} from "../models/new-user.model";
import {BehaviorSubject, catchError, map, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserRole} from "../models/user-role.model";
import {LocalStorageService} from "../services/local-storage.service";
import * as shajs from 'sha.js';
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class AuthService {
  public url: string = "";
  user: BehaviorSubject<User> = new BehaviorSubject<User>(this.localStorageService.getUserFromLocalStorage());

  private tokenExpirationTimer;

  constructor(private http: HttpClient,
              private router: Router,
              private localStorageService: LocalStorageService) {
    this.user.subscribe(() => {
      if(this.user != null) {
        this.router.navigate(['/admin']);
      }
    });
  }

  prepareURL(authentication: string) {
    this.url = environment.serverURL + authentication;
     return this.url;
  }

  prepareHeader() {
    return new HttpHeaders(
      {
        accept: 'application/json',
      });
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
  passwordHash(password: string): string {
    return shajs('sha256').update(password).digest('hex');
  }
  logIn(username: string, password: string) {
    this.prepareURL('login');
    return this.http.post<{ name: string, roles: string, accessToken: string, refreshToken: string }>(
      this.url, {
      }, {
        headers: this.prepareHeader(),
        params: {
          username: username,
          passcode: this.passwordHash(password)
        }
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
      catchError(this.handleError)
  )
  }

  signUp(newUser: NewUser) {
    this.prepareURL('register');
    return this.http.post<{name: string, roles: string, accessToken: string, refreshToken: string}>(
      this.url, {
        id: null,
        name:newUser.name,
        email: newUser.email,
        passcode: this.passwordHash(newUser.passcode),
        roles: newUser.roles
      },{
        headers: this.prepareHeader()
      }
    ).pipe(
      map(dataRes => {
          return this.handleAuth(
            dataRes.name,
            dataRes.roles,
            dataRes.accessToken,
            dataRes.refreshToken
          );
        }
      ),
      catchError(this.handleError));
  }

  private handleAuth(
    name: string,
    roles: string,
    token: string,
    refreshToken: string) {
    const newRoles: UserRole[] = this.createRoles(roles)
    const user = new User(1, name, null, newRoles, token, refreshToken)
    this.localStorageService.storeUser(user);
    this.user.next(user);
    this.autoLogOut();
    return user;

  }

  private createRoles(roles: string): UserRole[] {
    let newRoles: UserRole[] = [];
    if(typeof roles == "string") {
      const id: number = null;
      for (const rol of
        roles.replace('[', '')
          .replace(']', '')
          .replace(' ', '')
          .split(",")) {
        newRoles.push(new UserRole(id, rol))
      }
      return newRoles;
    }
    newRoles = roles;
    return newRoles;
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes)
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
    this.router.navigate(['home']);
    this.user.next(null);
    if (this.tokenExpirationTimer) {
      clearTimeout();
    }
    this.localStorageService.removeUser();
  }

  autoLogOut() {
    const MAX_MINUTES = 10 * 60 * 1000// miliseconds
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, MAX_MINUTES)
  }
}
