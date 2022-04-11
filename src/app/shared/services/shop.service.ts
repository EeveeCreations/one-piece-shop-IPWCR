import {Injectable, OnInit} from "@angular/core";
import {ShoppingCartService} from "./shopping-cart.service";
import {Product} from "../models/product.model";
import {ProductService} from "./product.service";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ShopService implements OnInit{
  allItemsOfShop: Product[];
  alertItem: Subject<Product> = new Subject<Product>();

  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService) {
  }
  ngOnInit(): void {
    this.getAllItemsOfShop();
  }

  private getAllItemsOfShop() {
    this.allItemsOfShop = this.productService.getProducts();
  }

  giveAlertAboutItem(product: Product) {
    this.alertItem.next(product);
  }

   changeAmountOfItem(product, toAdd:boolean){
    this.shoppingCartService.updateCart(product,"amount",toAdd)
  }
}
