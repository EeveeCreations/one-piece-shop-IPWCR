import {Product} from "./product.model";
import {ShoppingCart} from "./shopping-cart.model";

export class CartItem{
  private _cartNumber: ShoppingCart;
  private _product: Product;
  private _amount: number;

  constructor( cartNumber: ShoppingCart, product: Product, amount: number) {
    this._cartNumber = cartNumber;
    this._product = product;
    this._amount = amount;
  }


  get cartNumber(): ShoppingCart {
    return this._cartNumber;
  }

  set cartNumber(value: ShoppingCart) {
    this._cartNumber = value;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }
}
