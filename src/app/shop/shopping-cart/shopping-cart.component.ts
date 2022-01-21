import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShoppingCart} from "../../shared/models/shopping-cart.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public cart: ShoppingCart;
  private cartSubscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.cartSubscription = this.shoppingCartService.shoppingCartEvent.subscribe((cart: ShoppingCart) =>{
      console.log(cart)
      console.log(this.shoppingCartService.returnCart())
      this.cart = this.shoppingCartService.returnCart()}
    )
  }

  onBuyCart() {
    this.shoppingCartService.buyTheCart(true);
  }


}
