import {Injectable, OnInit} from "@angular/core";
import {ShoppingCartService} from "./shopping-cart.service";
import {Product} from "../models/product.model";
import {ProductService} from "./product.service";

@Injectable({providedIn: 'root'})
export class ShopService implements OnInit{
  allItemsOfShop: Product[];

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
    if (this.shoppingCartService.seeIfItemInCart(product)) {
      this.giveAlertToDelete(product);
    } else {
      this.giveAlertToAdd(product);
    }
  }

   changeAmountOfItem(product, toAdd:boolean){
    this.shoppingCartService.updateCart(product,"amount",toAdd)
  }

  private giveAlertToDelete(product: Product) {
    if (confirm("Do you want to Delete this Item from the Cart")) {
      this.shoppingCartService.updateCart(product, "delete");
    }

  }

  private giveAlertToAdd(product: Product) {
    if(confirm("Do you want to Add this Item to the Cart")) {
      this.shoppingCartService.updateCart(product);
    }
  }

}
