import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mailForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.mailForm = new FormGroup({
      'mail': new FormControl(null, [Validators.email, Validators.required]),
      'subject': new FormControl(null, [ Validators.required]),
      'message': new FormControl(null, [ Validators.required])
    })
  }

  onMail() {
    let subject = this.mailForm.get('subject').value;
    let cc = this.mailForm.get('mail').value;
    let mesBody = this.mailForm.get('message').value;
    window.open("mailto:s1126086@student.hsleiden.nl?cc=" + cc + "&subject=" + subject + "&body=" + mesBody);

  }
}
