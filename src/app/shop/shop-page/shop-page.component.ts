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
  private subscriptionPayMode: Subscription;
  private subscriptionOfProducts: Subscription;
  shopProducts: Product[];
  public isInPayMode: boolean = false;
  public shopAlert: boolean = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService
  ) {
  }

  setSubscriptions() {
    this.shopProducts = this.productService.getProducts();
    this.subscriptionOfProducts = this.productService.productEvent.subscribe(
      (products: Product[]) => {
        console.log("updated")
        this.setShopProducts(products);
      }
    );
    this.subscriptionPayMode = this.shoppingCartService.paymentEvent.subscribe( mode =>{
      this.isInPayMode = mode;
    }

    );
  }

  private setShopProducts(products: Product[]) {
    this.shopProducts = products;
  }

  ngOnDestroy(): void {
    this.subscriptionOfProducts.unsubscribe();
  }

  ngOnInit(): void {
    this.setSubscriptions();
    // this.initFilters();
  }

  private initFilters() {
    // for (let item; this.shopProducts;) {
    // }
  }
}
