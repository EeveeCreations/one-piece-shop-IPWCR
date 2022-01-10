import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Product} from "../shared/product/product.model";
import {ShoppingCartService} from "./shopping-cart/shopping-cart.service";
import {ProductService} from "../shared/product/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[ShoppingCartService]
})
export class ShopComponent implements OnInit , OnDestroy{
  public shopProducts: Product[];
  private subscriptionOfProducts: Subscription;
  public isInPayMode:boolean = true;

  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService) { }

  ngOnDestroy(): void {
      this.subscriptionOfProducts.unsubscribe();
    }

  ngOnInit(): void {
    this.shopProducts = this.productService.getProducts();
    // this.subscriptionOfProducts = this.productService.productEvent.subscribe(
    //   (products: Product[]) => {
    //     this.shopProducts = products;
    //   }
    // );
  }

  startPayment(event: boolean) {
    this.isInPayMode =event;
  }
}
