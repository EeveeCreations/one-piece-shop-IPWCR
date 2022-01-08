import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./product.model";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('product')  product: Product;
  @Input('i') index: number;

  constructor(private shoppingCartService:ShoppingCartService,
              private shopService:ShopService) { }

  ngOnInit(): void {

  }

  alertToEvent() {
    this.shopService.GiveAlertAboutItem(this.product);
  }

  OnClickProduct(){

    // return this.shoppingCartService.seeIfItemInCart(this.product);

  }

  isInCart(): boolean {
    console.log(this.shoppingCartService.seeIfItemInCart(this.product));
    return this.shoppingCartService.seeIfItemInCart(this.product);
  }
}
