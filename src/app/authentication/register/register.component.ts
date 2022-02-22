import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {User} from "../../shared/models/user.model";
import {UserRole} from "../../shared/models/user-role.model";
import {NewUser} from "../../shared/models/new-user.model";
import {AuthService} from "../../shared/authentication/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../authentication.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class RegisterComponent implements OnInit {
  @Output('form') userForm: any;
  private error: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    this.checkAuthentication();
  }

  private initForm() {
      this.userForm = new FormGroup({
        'name': new FormControl(null,
          [Validators.required]),
        'email': new FormControl(null,
          [Validators.required, Validators.email]),
        'password': new FormControl(null,
          [Validators.required, Validators.min(6)]),
        'admin': new FormControl(null,)
      });
  }

  checkAuthentication() {
    const name = this.userForm.get('name').value;
    const pass = this.userForm.get('password').value;
    let authObs: Observable<User>;
      const email = this.userForm.get('email').value;
      const isAdmin = this.userForm.get('admin').touched;
      let roles : UserRole[] = [new UserRole(2,"CLIENT")];
      if(isAdmin){
        roles.push(new UserRole(1,"ADMIN"));
      }
      let newUser = new NewUser(name,email,pass,roles);
    console.log(newUser.roles);
      authObs = this.authService.signUp(newUser);
    authObs.subscribe(answer => {
    }, errorMes=> {
      this.error = errorMes;
    });
    this.userForm.reset();
  }
}
