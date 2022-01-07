import {Injectable} from "@angular/core";
import {Product} from "../shop/item/product.model";
import {Subject} from "rxjs";
import {RequestService} from "./Requests/request.service";

@Injectable()
export class ProductService {
  private products: Product[] = [];
  private productEvent: Subject<Product[]>

  constructor(private requestService: RequestService) {
  }

  addProduct(){


  }
  updateProduct(){

  }
  deleteProduct(){

  }

  getProducts():Product[]{
    return this.products.slice();
  }


  setProducts(newProducts: Product[]): void {
    this.products = newProducts;
    this.productEvent.next(this.products.slice());

  }
}
