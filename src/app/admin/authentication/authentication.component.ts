import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../../shared/models/user.model";
import {AuthService} from "../../shared/services/auth.service";
import {AuthResponse} from "../../shared/models/auth-response.model";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  isLogIn: boolean = false;
  userForm: FormGroup;
  isWaiting: boolean;
  private error: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm = new FormGroup({
      'name': new FormControl(null,
        [Validators.required, Validators.email]),
      'email': new FormControl(null,
        [Validators.required, Validators.email]),
      'password': new FormControl(null,
        [Validators.required, Validators.min(6)]),
      'isAdmin': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    this.isWaiting = true;
    this.checkAuthentication();
  }

  onSwitchMode() {
    this.isLogIn = !this.isLogIn;
  }

  checkAuthentication() {
    const name = this.userForm.get('name').value;
    const pass = this.userForm.get('password').value;

    let authObs: Observable<AuthResponse>;

    if (this.isLogIn) {
      authObs = this.authService.logIn(name, pass)
    } else {
      const email = this.userForm.get('email').value;
      const isAdmin = this.userForm.get('isAdmin').value;
      authObs = this.authService.signUp(name,email,pass,isAdmin)
    }
    authObs.subscribe(answer => {
      console.log(answer);
    }, errorMes=> {

      this.error = errorMes;
    });

    this.isWaiting = false;
    this.userForm.reset();
  }




}
