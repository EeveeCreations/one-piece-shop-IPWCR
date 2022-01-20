import {Injectable} from "@angular/core";
import {ShoppingCart} from "../models/shopping-cart.model";
import {Subject} from "rxjs";
import {CartItem} from "../models/cart-item.model";
import {ProductService} from "./product.service";
import {Product} from "../models/product.model";
import {OrderHandlingService} from "./order-handling.service";

@Injectable({providedIn: "root"})
export class ShoppingCartService {
  private shoppingCart: ShoppingCart;
  shoppingCartEvent: Subject<ShoppingCart> = new Subject<ShoppingCart>();

  paymentEvent:Subject<boolean> = new Subject<boolean>();

  constructor(private productService: ProductService,
              private orderHandlingService: OrderHandlingService) {
    this.shoppingCart= new ShoppingCart(0, [], 0, false)
  }

  returnCart() {
    return this.shoppingCart;
  }

  returnCartItems() {
    return this.shoppingCart.cartItems.slice();
  }

  private calculatePrice() : number{
    let totalPrice: number = 0;
    for (const item of this.shoppingCart.cartItems) {
      totalPrice += item.product.price;
    }
    return totalPrice;
  }

  updateCart(product: Product) {
    this.paymentEvent.next(false)
    if (this.seeIfItemInCart(product)) {
      this.DeleteItemFromCart(product);
    } else {
      this.AddItemToCart(product);
    }
    this.shoppingCart.amountOfProducts = this.shoppingCart.cartItems.length;
    this.shoppingCart.totalPrice = this.calculatePrice();
    console.log(this.shoppingCart)
    this.shoppingCartEvent.next(this.shoppingCart);
  }

  AddItemToCart(product: Product) {
    const item: CartItem = new CartItem(this.shoppingCart, product, 1)
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

  buyTheCart(isPaying: boolean ) {
    this.paymentEvent.next(isPaying);
    console.log(this.shoppingCart);
  }


  seeIfItemInCart(product: Product): boolean {
    return this.findProductInCart(product) != undefined;
  }

  setShoppingCart(cart: ShoppingCart) {
    this.shoppingCart = cart;
  }
  putCartToOrders(){
    this.shoppingCart.isOrdered = true;
    this.orderHandlingService.addNewOrder(this.shoppingCart);

  }
}
