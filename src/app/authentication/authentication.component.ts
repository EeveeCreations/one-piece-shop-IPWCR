import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {User} from "../shared/models/user.model";
import {AuthService} from "../shared/authentication/auth.service";
import {UserRole} from "../shared/models/user-role.model";
import {NewUser} from "../shared/models/new-user.model";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isLogIn: boolean = true;
  userForm: FormGroup;
  isWaiting: boolean;
  private error: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLogIn = !this.isLogIn;
  }


  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    this.isWaiting = true;
    this.checkAuthentication();
  }

  checkAuthentication() {
    const name = this.userForm.get('name').value;
    const pass = this.userForm.get('password').value;
    let authObs: Observable<User>;
    if (this.isLogIn) {
      authObs = this.authService.logIn(name, pass).pipe(tap(answer =>{
        console.log(answer)}));
    } else {
      const email = this.userForm.get('email').value;
      const isAdmin = this.userForm.get('admin').touched;
      let roles : UserRole[] = [new UserRole(2,"CLIENT")];
      if(isAdmin){
        roles.push(new UserRole(1,"ADMIN"));
      }
      let newUser = new NewUser(name,pass,email,roles)
      authObs = this.authService.signUp(newUser)
    }
    authObs.subscribe(answer => {

    }, errorMes=> {

      this.error = errorMes;
    });

    this.isWaiting = false;
    this.userForm.reset();
  }




}