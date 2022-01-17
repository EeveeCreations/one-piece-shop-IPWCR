import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../shared/models/product.model";
import {ShoppingCartService} from "../shared/services/shopping-cart.service";
import {ProductService} from "../shared/services/product.service";
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
  private subscriptionOfPayment: Subscription;
  public isInPayMode: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService) { }

  ngOnDestroy(): void {
    this.subscriptionOfPayment.unsubscribe();
    this.subscriptionOfProducts.unsubscribe();
    }

  ngOnInit(): void {
    this.initFilters();
    this.shopProducts = this.productService.getProducts();
    this.subscriptionOfProducts = this.productService.productEvent.subscribe(
      (products: Product[]) => {
        this.shopProducts = products;
      }
    );
    this.subscriptionOfPayment = this.shoppingCartService.paymentEvent.subscribe(
      (isPaying:boolean) => {
        this.isInPayMode = isPaying;
      }
    );
  }

  private initFilters() {
    for(let item; this.shopProducts;){}
  }

  OnFilterItem(string, filter){

  }
  filterItems() {
    // for (let i = 0; i < this.items.length; i++) {
    //   this.items[i].style.display = "none";
    // }
  }

}
