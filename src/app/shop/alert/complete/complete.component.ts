import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  userName: string = ""
  constructor(
    private router : Router,
    private activeRoute : ActivatedRoute,
    private shoppingCartService:ShoppingCartService) {
  }
  ngOnInit(): void {
    this.shoppingCartService.orderCompleted();
    this.getUserName();
  }

  private getUserName() {
    this.userName = this.activeRoute.params['id'];

  }
}
