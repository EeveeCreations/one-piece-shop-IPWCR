import {Component, OnInit} from '@angular/core';
import {Product} from "../shared/models/product.model";
import {Subscription} from "rxjs";
import {ShoppingCartService} from "../shared/services/shopping-cart.service";
import {ProductService} from "../shared/services/product.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']

})
export class StartPageComponent implements OnInit {
  public newProducts: Product[] = [];
  private subscriptionOfProducts: Subscription;
  currentProduct: Product;
  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService
  ) {
    this.setSubscriptions();
  }

  setSubscriptions() {
    this.setNewProducts(this.productService.getProducts())
    console.log(this.newProducts)
    this.subscriptionOfProducts = this.productService.productEvent.subscribe(
      (products: Product[]) => {
        this.setNewProducts(products)
      }
    );
  }

  setNewProducts(products: Product[]) {
    for(let i = 1; i <= 6; i++) {
      this.newProducts.push(products[products.length - i]);
    }
  }

  ngOnDestroy(): void {
    this.subscriptionOfProducts.unsubscribe();
  }

  ngOnInit(): void {
    this.setNewProducts(this.productService.getProducts());
  }

}
