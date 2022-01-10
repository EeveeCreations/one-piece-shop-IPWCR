import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import {Subject} from "rxjs";

@Injectable()
export class ProductService {
  private products: Product[] = [];
  productEvent: Subject<Product[]> = new Subject<Product[]>();

  constructor() {
  }

  addProduct(product: Product){
    this.products.push(product);
    this.productEvent.next(this.products.slice());


  }
  updateProduct(index: number, newProduct: Product){
    this.products[index] = newProduct;
    this.productEvent.next(this.products.slice());
  }
  deleteProduct(id: number){
    this.products.splice( id,1)

  }

  getProducts():Product[]{
    return this.products.slice();
  }

  setProducts(newProducts: Product[]): void {
    this.products = newProducts;
    this.productEvent.next(this.products.slice());
  }

  getProduct(id: number): Product {
    return this.products[id];
  }
}
