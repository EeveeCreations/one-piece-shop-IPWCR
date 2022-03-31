import {Injectable, OnInit} from "@angular/core";
import {ShoppingCart} from "../models/shopping-cart.model";
import {Subject} from "rxjs";
import {CartItem} from "../models/cart-item.model";
import {ProductService} from "./product.service";
import {Product} from "../models/product.model";
import {OrderHandlingService} from "./order-handling.service";
import {LocalStorageService} from "./local-storage.service";

@Injectable({providedIn: "root"})
export class ShoppingCartService implements OnInit {

  private shoppingCart: ShoppingCart;
  public shoppingCartEvent: Subject<ShoppingCart>;
  public paymentEvent:Subject<boolean>;

  constructor(
    private productService: ProductService,
    private orderHandlingService: OrderHandlingService,
    private localStorageService: LocalStorageService
  ) {
    this.setShoppingCart();
  }

  private setShoppingCart() {
    this.shoppingCart = this.localStorageService.getCartFromLocalStorage();
    if (!this.shoppingCart) {
      this.createNewCart();
    }
  }

  private createNewCart() {
    this.shoppingCart = new ShoppingCart(0, [], 0, false);
    this.updateShoppingCart();
  }

  returnCart(): ShoppingCart {
    return this.shoppingCart;
  }

  private calculatePrice(): number {
    let totalPrice: number = 0;
    for (const item of this.shoppingCart.cartItems) {
      totalPrice += item.product.price;
    }
    return totalPrice;
  }

  updateCart(product: Product, updateType?: string, toAdd?: boolean) {
    // this.paymentEvent.next(false);
    if (this.seeIfItemInCart(product)) {
      switch (updateType) {
        case "delete" :
          this.DeleteItemFromCart(product);
          break;
        case "amount":
          this.changeItemAmount(product, toAdd);
          break;
      }
    } else {
      this.AddItemToCart(product);
    }
    this.shoppingCart.amountOfProducts = this.shoppingCart.cartItems.length;
    this.shoppingCart.totalPrice = this.calculatePrice();
    this.localStorageService.storeCart(this.shoppingCart);
    this.updateShoppingCart();
  }

  private updateShoppingCart() {
    // this.shoppingCartEvent.next(this.shoppingCart);
  }

  AddItemToCart(product: Product) {
    const item: CartItem = new CartItem(product, 1);
    this.shoppingCart.cartItems.push(item);
  }

  DeleteItemFromCart(product: Product) {
    const item = this.findProductInCart(product);
    const index = this.shoppingCart.cartItems.indexOf(item);
    this.shoppingCart.cartItems.splice(index, 1);
  }

  private findProductInCart(product: Product): CartItem {
    for (let cartItem of this.shoppingCart.cartItems) {
      if (cartItem.product == product) {
        return cartItem;
      }
    }
    return undefined;
  }

  buyTheCart(isPaying: boolean) {
    // this.paymentEvent.next(isPaying);
  }

  seeIfItemInCart(product: Product): boolean {
    return this.findProductInCart(product) != undefined;
  }

  getItemOfCart(product: Product): CartItem {
    return this.findProductInCart(product);
  }

  putCartToOrders() {
    this.orderHandlingService.addNewOrder(this.shoppingCart);
  }

  orderCompleted() {
    this.shoppingCart.isOrdered = true;
    this.putCartToOrders();
    this.localStorageService.removeCart();
    this.createNewCart();
  }

  changeItemAmount(product: Product, add: boolean) {
    let item: CartItem = this.findProductInCart(product);
    if (add) {
      item.amount += 1;
    } else {
      item.amount -= 1;
      if (item.amount == 0) {
        this.DeleteItemFromCart(product);
      }
    }

  }

  ngOnInit(): void {
  }
}
