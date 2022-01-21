import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) {
  }
  ngOnInit(): void {
    this.shoppingCartService.orderCompleted();
  }
}
