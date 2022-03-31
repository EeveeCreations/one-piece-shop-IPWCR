import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart.model";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  cartSubscription: Subscription;
  cart: ShoppingCart;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.setSubscription();
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  private setSubscription() {
    this.cartSubscription = this.shoppingCartService.shoppingCartEvent.subscribe(
      (cart: ShoppingCart) => {
        this.cart = cart;
      }
    );
  }

  onBuyCart() {
    this.shoppingCartService.buyTheCart(true);
  }


}
