import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class RegisterComponent implements OnInit {
  @Output('form') userForm: any;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
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
}
