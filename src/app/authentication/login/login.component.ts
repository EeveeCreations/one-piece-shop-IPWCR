import {Component, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
  @Output('form') userForm: FormGroup;

  constructor() { }

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

}
