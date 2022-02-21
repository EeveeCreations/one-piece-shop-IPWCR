import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {AuthService} from "../auth.service";
import {Injectable} from "@angular/core";
import {UserRole} from "../../models/user-role.model";

@Injectable({providedIn:"root"})
export class UserGuard implements CanActivate {
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
          const isNotAUser = !user;
          if (isNotAUser) {
            return true;
          }
          return this.router.createUrlTree(['/auth']);
        }));

  }
}
