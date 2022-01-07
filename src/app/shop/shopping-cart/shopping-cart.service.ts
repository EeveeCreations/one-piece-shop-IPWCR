import {Injectable} from "@angular/core";
import {ShoppingCart} from "./shopping-cart.model";
import {ItemService} from "../../shared/item.service";
import {Subject} from "rxjs";
import {CartItem} from "./cart-item.model";

@Injectable()
export class ShoppingCartService {
  shoppingCartItems: CartItem[] = [];
  shoppingCart: ShoppingCart;
  shoppingCartEvent: Subject<CartItem[]> = new Subject<CartItem[]>();

  constructor(private itemSc: ItemService) {
    for(let prod of itemSc.getAllItems()){
      const newItem: CartItem = new CartItem(this.shoppingCart,prod,1)
      this.shoppingCartItems.push(newItem);
    }
    this.shoppingCart = new ShoppingCart(
      this.shoppingCartItems.length,this.shoppingCartItems.slice()
      ,200,false);
  }

  returnCart() {
    return this.shoppingCartItems.slice();
  }

  AddItemToCart(item: CartItem) {
    this.shoppingCartItems.push(item);
    this.shoppingCartEvent.next(this.shoppingCartItems.slice());

  }

  DeleteItemFromCart(item: CartItem) {
    const index = this.shoppingCartItems.indexOf(item);
    this.shoppingCartItems.splice(index, 1);
    this.shoppingCartEvent.next(this.shoppingCartItems.slice());
  }

  buyTheCart(cart: ShoppingCart) {

  }


  seeIfItemInCart(item: CartItem): boolean {
    return (this.shoppingCartItems.indexOf(item) !== -1);

  }

  setShoppingCart(cart: ShoppingCart) {
    this.shoppingCart = cart;
    this.shoppingCartItems = this.shoppingCart.cartItems
    this.shoppingCartEvent.next(this.shoppingCartItems.slice())
  }
}
