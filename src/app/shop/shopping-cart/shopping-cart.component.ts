import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart.model";
import {Subscription} from "rxjs";
import {LocalStorageService} from "../../shared/services/local-storage.service";

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
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.setSubscription();
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  private setSubscription() {
    this.cart = this.localStorageService.getCartFromLocalStorage();
    this.cartSubscription =  this.shoppingCartService.shoppingCartEvent.subscribe(() => {

        this.cart = this.shoppingCartService.returnCart();
      }
    );
  }

  onBuyCart() {
    this.shoppingCartService.buyTheCart(true);
  }


}
