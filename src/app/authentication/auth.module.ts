import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthenticationComponent} from "./authentication.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  declarations:[
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent
  ]
})
export class AuthModule {}
