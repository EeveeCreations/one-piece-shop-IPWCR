import {Component, Injectable} from "@angular/core";
import {ShoppingCartService} from "./shopping-cart/shopping-cart.service";
import {Product} from "./item/product.model";
import {CartItem} from "./shopping-cart/cart-item.model";
import {ItemService} from "../shared/item.service";

@Injectable()
export class ShopService{
  allItemsOfShop: Product[];

  constructor(private shoppingCartService: ShoppingCartService,
              private itemService: ItemService) {
    this.getAllItemsOfShop();
  }

  private getAllItemsOfShop() {
    //TODO:  Chaneg this to HTTP request of  server
    // this.allItemsOfShop = this.requestService.getShopItems();
    this.allItemsOfShop = this.itemService.getAllItems();
  }

  GiveAlertAboutItem(product: Product) {
    const potentialCartItem = new CartItem(this.shoppingCartService.shoppingCart,product,1);
    if(this.shoppingCartService.seeIfItemInCart(potentialCartItem)){
      this.giveAlertToDelete(potentialCartItem);

    }else {
      this.giveAlertToAdd(potentialCartItem);
    }
}

  private giveAlertToDelete(item: CartItem) {
    if(confirm("Do you want to Delete this Item from the Cart")){
      this.shoppingCartService.DeleteItemFromCart(item);
    }

  }

  private giveAlertToAdd(item: CartItem) {
    confirm("Do you want to Delete this Item from the Cart");
    this.shoppingCartService.AddItemToCart(item);

  }

  getAllShopItems(): Product[] {
    return this.allItemsOfShop;
  }
}
