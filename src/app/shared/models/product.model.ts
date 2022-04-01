export class Product {
  private _productNumber: number;
  private _name: string;
  private _description: string;
  private _price: number;
  private _category: string;
  private _imagePath: string;


  constructor(productNumber: number, name: string, description: string, price: number, category: string, imagePath: string) {
    this._productNumber = productNumber;
    this._name = name;
    this._description = description;
    this._price = price;
    this._category = category;
    this._imagePath = imagePath;
  }

  get productNumber(): number {
    return this._productNumber;
  }

  set productNumber(value: number) {
    this._productNumber = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }
}
