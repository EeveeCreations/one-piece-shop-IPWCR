import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {AuthService} from "../auth.service";
import {Injectable} from "@angular/core";
import {UserRole} from "../../models/user-role.model";

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree |
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1)
      , map(
        user => {
          const adminRole:UserRole = new UserRole(1,"ADMIN")
          const isAuth = user.roles.indexOf(adminRole) != -1;
          if (isAuth) {
            return true;
          }
          return this.router.createUrlTree(['/admin/inlog']);
        }));

  }
}
