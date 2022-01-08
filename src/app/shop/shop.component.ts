import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from "./item/product.model";
import {ShoppingCartService} from "./shopping-cart/shopping-cart.service";
import {CartItem} from "./shopping-cart/cart-item.model";
import {ProductService} from "../shared/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[ShoppingCartService]
})
export class ShopComponent implements OnInit , OnDestroy{
  shopProducts: Product[];
  subscriptionOfProducts: Subscription;

  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService) { }

  ngOnDestroy(): void {
      this.subscriptionOfProducts.unsubscribe();
    }

  ngOnInit(): void {
    this.shopProducts = this.productService.getProducts()
    this.subscriptionOfProducts = this.productService.productEvent.subscribe(
      (products: Product[]) => {
        this.shopProducts = products;
      }
    );
  }

}
