import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../shared/services/shop.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart.model";
import {Subscription} from "rxjs";
import {LocalStorageService} from "../../shared/services/local-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentService} from "../../shared/services/payment.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  shoppingCartSubscription: Subscription;
  cart: ShoppingCart;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private shopService: ShopService,
    private paymentService: PaymentService,
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
    const user = this.localStorageService.getUserFromLocalStorage();
    if(user){
     this.paymentService.turnPaymentIntoOrder(user.id);
     return;
    }
    this.router.navigate(['../register']);
    this.shoppingCartService.buyTheCart(true);
  }

}
