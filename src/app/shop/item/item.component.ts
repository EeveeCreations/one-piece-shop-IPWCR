import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {ShopService} from "../shop.service";
import {CartItem} from "../shopping-cart/cart-item.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('item') cartItem: CartItem;
  @Input('i') index: number;
  product: Product;

  constructor(private shoppingCartService:ShoppingCartService,
              private shopService:ShopService) { }

  ngOnInit(): void {
    this.product = this.cartItem.product;

  }

  alertToEvent() {
    this.shopService.GiveAlertAboutItem(this.product);
  }

  isInCart() {
    return this.shoppingCartService.seeIfItemInCart(this.cartItem);
  }
}
