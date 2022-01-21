import {Injectable} from "@angular/core";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";
import {Product} from "../models/product.model";

@Injectable()
export class ShopFilterService {
  private itemSubscription: Subscription;
  private items: Product[];

  constructor(private productService: ProductService) {
    this.itemSubscription = productService.productEvent.subscribe(products =>{
      this.items = products;
      }
    )
  }

  filterItems() {
    // for (let i = 0; i < this.items.length; i++) {
    //   this.items[i].style.display = "none";
    // }
  }
}
