import {Injectable} from "@angular/core";
import {Product} from "../models/product.model";
import {Subject} from "rxjs";

@Injectable({providedIn:"root"})
export class ProductService {
  private products: Product[] = [];
  productEvent: Subject<Product[]> = new Subject<Product[]>();

  constructor() {
  }

  addProduct(product: Product){
    console.log('add')
    this.products.push(product);
    this.productEvent.next(this.products.slice());
  }

  updateProduct(index: number, newProduct: Product){
    console.log('updated')
    this.products[index] = newProduct;
    this.productEvent.next(this.products.slice());
  }

  deleteProduct(id: number){
    this.products.splice( id,1);
    this.productEvent.next(this.products.slice());
  }

  getProducts():Product[]{
    return this.products;
  }

  setProducts(newProducts: Product[]): void {
    this.products = newProducts;
    this.productEvent.next(this.products);
  }

  getProduct(id: number): Product {
    return this.products[id];
  }
}
