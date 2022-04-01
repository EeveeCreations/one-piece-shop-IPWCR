import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RequestService} from "../requests/request.service";
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<Product[]>{
  constructor(private requestService: RequestService,
              private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Product[]> | Promise<Product[]> | Product[] {
    const products = this.productService.getProducts();
    if (products.length === 0) {
      const newProducts = this.requestService.requestOfProduct("all","get",null);
      return newProducts
    }
    return products
  }

}
