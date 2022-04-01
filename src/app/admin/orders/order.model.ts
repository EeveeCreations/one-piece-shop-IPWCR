import {ShoppingCart} from "../../shared/models/shopping-cart.model";

export class Order {
  private _cart: ShoppingCart;
  private _completed:boolean;


  constructor( cart: ShoppingCart, completed) {
    this._cart = cart;
    this._completed = completed;
  }


  get cart(): ShoppingCart {
    return this._cart;
  }

  set cart(value: ShoppingCart) {
    this._cart = value;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(value: boolean) {
    this._completed = value;
  }
}

