import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../shared/services/shop.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart.model";
import {Subscription} from "rxjs";
import {LocalStorageService} from "../../shared/services/local-storage.service";

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
    private shoppingCartService: ShoppingCartService,
    private localStorageService: LocalStorageService
  ) {}

  setSubscription() {
    this.cart = this.localStorageService.getCartFromLocalStorage();
    this.shoppingCartSubscription = this.shoppingCartService.shoppingCartEvent.subscribe(
      (newCart: ShoppingCart) => {
        this.cart = newCart;
      });

  }

  ngOnInit(): void {
    this.setSubscription();
  }

  onPayCart(){
    this.shoppingCartService.buyTheCart(true);
  }

}
