import {Component, Directive, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-warning',
  templateUrl: './error-warning.component.html',
  styleUrls: ['./error-warning.component.css']
})
export class ErrorWarningComponent implements OnInit {
    @Input() errorMes: string;
  constructor() { }

  ngOnInit(): void {
  }

}
