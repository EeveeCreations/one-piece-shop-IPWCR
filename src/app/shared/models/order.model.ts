import {ShoppingCart} from "./shopping-cart.model";

export class Order {

  private _id: number;
  private _cart: ShoppingCart;
  private _completed:boolean;


  constructor(id:number, cart: ShoppingCart, completed) {
    this._id = id;
    this._cart = cart;
    this._completed = completed;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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

