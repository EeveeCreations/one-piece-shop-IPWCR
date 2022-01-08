import {Injectable} from "@angular/core";
import {ShoppingCartService} from "./shopping-cart/shopping-cart.service";
import {Product} from "./item/product.model";
import {ProductService} from "../shared/product.service";

@Injectable()
export class ShopService{
  allItemsOfShop: Product[];

  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService) {
    this.getAllItemsOfShop();
  }

  private getAllItemsOfShop() {
    this.allItemsOfShop = this.productService.getProducts();
  }

  GiveAlertAboutItem(product: Product) {
    if (this.shoppingCartService.seeIfItemInCart(product)) {
      this.giveAlertToDelete(product);
    } else {
      this.giveAlertToAdd(product);
    }
  }

  private giveAlertToDelete(product: Product) {
    if (confirm("Do you want to Delete this Item from the Cart")) {
      this.shoppingCartService.DeleteItemFromCart(product);
    }
  }

  private giveAlertToAdd(product: Product) {
    confirm("Do you want to Add this Item to the Cart");
    this.shoppingCartService.AddItemToCart(product);

  }

  getAllShopItems(): Product[] {
    return this.allItemsOfShop;
  }

  setItemsOfShop(newItems: Product[]) {
    this.allItemsOfShop = newItems;
  }
}
