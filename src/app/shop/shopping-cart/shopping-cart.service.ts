import {Injectable} from "@angular/core";
import {ShoppingCart} from "./shopping-cart.model";
import {Subject} from "rxjs";
import {CartItem} from "./cart-item.model";
import {ProductService} from "../../shared/product/product.service";
import {Product} from "../../shared/product/product.model";
import {OrderService} from "../../admin/orders/order.service";

@Injectable()
export class ShoppingCartService {
  private shoppingCart: ShoppingCart;
  shoppingCartEvent: Subject<ShoppingCart> = new Subject<ShoppingCart>();
  cartItemsEvent: Subject<CartItem[]> = new Subject<CartItem[]>();

  constructor(private productService: ProductService,
              private orderService: OrderService) {
    this.shoppingCart = new ShoppingCart(0, [], 0, false)
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

  buyTheCart(cart: ShoppingCart) {

  }


  seeIfItemInCart(product: Product): boolean {
    return this.findProductInCart(product) != undefined;
  }

  setShoppingCart(cart: ShoppingCart) {
    this.shoppingCart = cart;
    // this.shoppingCartItems = this.shoppingCart.cartItems;
    this.cartItemsEvent.next(this.shoppingCart.cartItems.slice());
  }
  putCartToOrders(){
    this.shoppingCart.isOrdered = true;
    this.orderService.addToOrders(this.shoppingCart);

  }
}
