import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../shared/services/shop.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  shoppingCartSubscription: Subscription;
  cart: ShoppingCart;

  constructor(
    private shopService: ShopService,
    private shoppingCartService: ShoppingCartService
  ) {
    this.setSubscription();
  }

  setSubscription() {
    this.shoppingCartSubscription = this.shoppingCartService.shoppingCartEvent.subscribe(
      (newCart: ShoppingCart) => {
        this.cart = newCart;
      });
  }

  ngOnInit(): void {
  }

  onPayCart(){
    this.shoppingCartService.buyTheCart(true);
  }

}
