import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "./shopping-cart.service";
import {ShoppingCart} from "./shopping-cart.model";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public cart: ShoppingCart;
  public cartSubscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService,
              private activeRoute: ActivatedRoute) {
    this.cart = shoppingCartService.shoppingCart;
  }

  ngOnInit(): void {
    this.cartSubscription = this.shoppingCartService.shoppingCartEvent.subscribe()
  }

  onBuyCart() {
    this.shoppingCartService.buyTheCart(this.cart)
  }


}
