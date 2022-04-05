import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user.model";
import {ShoppingCart} from "../models/shopping-cart.model";
import {Order} from "../models/order.model";
import {Product} from "../models/product.model";
import {tap} from "rxjs";
import {ProductService} from "../services/product.service";
import {OrderService} from "../services/order.service";
import { environment } from '../../../environments/environment';
import {LocalStorageService} from "../services/local-storage.service";

@Injectable({providedIn: 'root'})
export class RequestService {
  private url: string = "";
  private user: User;

  constructor(private http: HttpClient,
              private productService:ProductService,
              private orderService:OrderService,
              private localStorageService: LocalStorageService) {
    this.user = this.localStorageService.getUserFromLocalStorage();
  }

  prepareURL(model: string, specific: string) {
    this.url = environment.serverURL + model;
    if (specific !== "") {
      this.url = (this.url + "/" + specific);
    }
    return this.url;
  }

  prepareHeader() {
    let headerOfRequest : HttpHeaders  = new HttpHeaders();
    if (this.user != null) {
     headerOfRequest = new HttpHeaders({
      "authorization":"Bearer " + this.user.token
    });

       }
    return headerOfRequest;
  }

  requestOfCart(specific: string, duty: string, cart: ShoppingCart) {
    this.url = this.prepareURL("cart", specific);
    return this.http.request<ShoppingCart[]>(duty, this.url,
      {
        headers: this.prepareHeader(),
        body: cart,
      },
      )
      .pipe(
     );
  }

  requestOfOrder(specific: string, duty: string, order: Order) {
    this.url = this.prepareURL("order", specific);
    return this.http.request<Order[]>(
      duty, this.url,
      {
        headers: this.prepareHeader(),
        body: order
      },)
      .pipe(
        tap(orders => {
          if (specific == 'all') {
             orders = orders == null ? []: orders;
            this.orderService.setOrders(orders);
          }
        }));
  }

  requestOfProduct(specific: string, duty: string, product: Product) {
    this.url = this.prepareURL("product", specific);
    this.prepareHeader();
    return this.http.request<Product[]>(
      duty, this.url,
      {
        body: product,
        headers: this.prepareHeader()
      }).pipe(
      tap(products => {
        if (specific == 'all') {
          this.productService.setProducts(products);
        }
      }));

  }
}
