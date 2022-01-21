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
export class ShoppingCartComponent implements OnInit ,OnDestroy{
  public cart: ShoppingCart;
  private cartSubscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cartSubscription = this.shoppingCartService.shoppingCartEvent.subscribe((cart: ShoppingCart) =>{
      this.cart = cart}
      , error => {
       this.router.navigate(['error'])
    });
  }

  onBuyCart() {
    this.shoppingCartService.buyTheCart(true);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }


}
