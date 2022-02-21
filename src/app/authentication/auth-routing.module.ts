import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthenticationComponent} from "./authentication.component";
import {UserGuard} from "../shared/authentication/guards/user.guard";

const routes = [
  {path: '', component: AuthenticationComponent,/*  canActivate: [UserGuard]*/},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {

}
