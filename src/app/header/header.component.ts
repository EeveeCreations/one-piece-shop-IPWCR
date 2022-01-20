import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpened: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // this.closePopUp();
  }

  private closePopUp() {
    setTimeout(() =>{
      this.isOpened = false;
    },1500);
  }


  OnOpenShop() {
  }
}
