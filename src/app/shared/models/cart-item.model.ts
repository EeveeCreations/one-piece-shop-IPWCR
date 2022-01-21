import {Product} from "./product.model";

export class CartItem{
  constructor(product: Product, amount: number) {
    this._product = product;
    this._amount = amount;
  }
  private _product: Product;
  private _amount: number;


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
