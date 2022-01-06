import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Product} from "./item/product.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RequestService} from "../shared/Requests/request.service";
import {ProductService} from "../shared/product.service";

@Injectable({providedIn: 'root'})
export class ShopResolverService implements Resolve<Product[]>{
  constructor(private requestService: RequestService,
              private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {
    const products = this.productService.getProducts();
    if (products.length === 0) {
      return this.requestService.requestOfProduct("all","get",null);
    }
    return products
  }

}
