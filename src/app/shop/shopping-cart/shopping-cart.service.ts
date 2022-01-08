import {Injectable} from "@angular/core";
import {ShoppingCart} from "./shopping-cart.model";
import {Subject} from "rxjs";
import {CartItem} from "./cart-item.model";
import {ProductService} from "../../shared/product.service";
import {Product} from "../item/product.model";

@Injectable()
export class ShoppingCartService {
  shoppingCartItems: CartItem[] = [];
  shoppingCart: ShoppingCart;
  shoppingCartEvent:  Subject<ShoppingCart>= new Subject<ShoppingCart>();
  cartItemsEvent: Subject<CartItem[]> = new Subject<CartItem[]>();

  constructor(private productService: ProductService) {
    this.shoppingCart = new ShoppingCart(0, [], 0, false)
  }

  returnCart() {
    return this.shoppingCartItems.slice();
  }

  AddItemToCart(product: Product) {
    const item: CartItem = new CartItem(this.shoppingCart, product, 1)
    this.shoppingCartItems.push(item);
    this.shoppingCart.amountOfProducts ++;
    this.shoppingCartEvent.next(this.shoppingCart);
    // this.cartItemsEvent.next(this.shoppingCartItems.slice());
  }

  DeleteItemFromCart(product: Product) {
    const item = this.findProductInCart(product);
    const index = this.shoppingCartItems.indexOf(item);
    this.shoppingCartItems.splice(index, 1);
    this.shoppingCart.amountOfProducts --;
    this.shoppingCartEvent.next(this.shoppingCart);
    // this.cartItemsEvent.next(this.shoppingCartItems.slice());
  }

  private findProductInCart(product: Product): CartItem {
    for(let cartItem of this.shoppingCartItems) {
      if(cartItem.product == product){
        console.log(cartItem);
        return cartItem;
      }
      else {
        return undefined;
      }
    }
  }

  buyTheCart(cart: ShoppingCart) {

  }


  seeIfItemInCart(product: Product): boolean {
    return this.findProductInCart(product) != undefined;
  }

  setShoppingCart(cart: ShoppingCart) {
    this.shoppingCart = cart;
    this.shoppingCartItems = this.shoppingCart.cartItems
    this.cartItemsEvent.next(this.shoppingCartItems.slice())
  }
}
