import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart.model";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public cart: ShoppingCart;
  private cartSubscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService,
              private activeRoute: ActivatedRoute) {
    this.cart = shoppingCartService.returnCart();
  }

  ngOnInit(): void {
    this.cartSubscription = this.shoppingCartService.shoppingCartEvent.subscribe(cart =>{
      this.cart = cart;}
    )
  }

  onBuyCart() {
    this.shoppingCartService.buyTheCart(true);
  }


}
