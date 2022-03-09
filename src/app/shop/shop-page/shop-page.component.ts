import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product.model";
import {Subscription} from "rxjs";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit, OnDestroy {

  public shopProducts: Product[];
  private subscriptionOfProducts: Subscription;
  public isInPayMode: boolean = false;
  public shopAlert: boolean = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService
  ) {
    this.setSubscriptions();
  }

  setSubscriptions() {
    this.subscriptionOfProducts = this.productService.productEvent.subscribe(
      (products: Product[]) => {
        this.shopProducts = products;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptionOfProducts.unsubscribe();
  }

  ngOnInit(): void {
    this.shopProducts = this.productService.getProducts();
    this.initFilters();
  }

  private initFilters() {
    for (let item; this.shopProducts;) {
    }
  }
}