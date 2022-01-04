import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "./shopping-cart.service";
import {ShoppingCart} from "./shopping-cart.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  onBuyCart() {
    this.shoppingCartService.buyTheCart(this.cart)
  }
}
