import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthenticationComponent} from "./authentication.component";
import {UserGuard} from "../shared/authentication/guards/user.guard";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

const routes = [
  {path: '', component: AuthenticationComponent,/*  canActivate: [UserGuard], */children:[
      {path: '', component:RegisterComponent},
      {path: 'login', component:LoginComponent}
    ]},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {

}
