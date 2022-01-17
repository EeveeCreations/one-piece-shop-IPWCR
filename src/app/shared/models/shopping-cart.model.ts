import {CartItem} from "./cart-item.model";

export class ShoppingCart{
  private _amountOfProducts: number;
  private _cartItems: CartItem[];
  private _totalPrice: number;
  private _isOrdered: boolean;


  constructor(amountOfProducts: number, cartItems: CartItem[], totalPrice: number, isOrdered: boolean) {
    this._amountOfProducts = amountOfProducts;
    this._cartItems = cartItems;
    this._totalPrice = totalPrice;
    this._isOrdered = isOrdered;
  }



  get amountOfProducts(): number {
    return this._amountOfProducts;
  }

  set amountOfProducts(value: number) {
    this._amountOfProducts = value;
  }

  get cartItems(): CartItem[] {
    return this._cartItems;
  }

  set cartItems(value: CartItem[]) {
    this._cartItems = value;
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  set totalPrice(value: number) {
    this._totalPrice = value;
  }

  get isOrdered(): boolean {
    return this._isOrdered;
  }

  set isOrdered(value: boolean) {
    this._isOrdered = value;
  }
}
