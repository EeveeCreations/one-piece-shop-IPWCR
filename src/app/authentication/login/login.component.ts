import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../../shared/models/user.model";
import {AuthService} from "../../shared/authentication/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authentication.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  private error: any;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.userForm = new FormGroup({
      'name': new FormControl(null,
        [Validators.required]),
      'password': new FormControl(null,
        [Validators.required, Validators.min(6)]),
    });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    this.checkAuthentication();
  }

  checkAuthentication() {
    const name = this.userForm.get('name').value;
    const pass = this.userForm.get('password').value;
    let authObs: Observable<User>;
      authObs = this.authService.logIn(name, pass)
    authObs.subscribe(answer => {
      console.log(answer);
      }, errorMes => {
        this.error = errorMes;
      });
    this.userForm.reset();
  }
}
