import {Directive, OnInit} from '@angular/core';

@Directive({
  selector: '[app-spinner]'
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
