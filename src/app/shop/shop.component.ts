import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from "./item/product.model";
import {ShoppingCartService} from "./shopping-cart/shopping-cart.service";
import {CartItem} from "./shopping-cart/cart-item.model";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[ShoppingCartService]
})
export class ShopComponent implements OnInit {
  shopMagazine: CartItem[];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shopMagazine = this.shoppingCartService.returnCart()

  }

}
