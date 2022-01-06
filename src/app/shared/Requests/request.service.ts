import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ShopService} from "../../shop/shop.service";
import {tap} from "rxjs";
import {OrderService} from "../../admin/orders/order.service";
import {ProductService} from "../product.service";
import {User} from "../models/user.model";
import {ShoppingCart} from "../../shop/shopping-cart/shopping-cart.model";
import {ShoppingCartService} from "../../shop/shopping-cart/shopping-cart.service";
import {Order} from "../../admin/orders/order.model";
import {Product} from "../../shop/item/product.model";

@Injectable({providedIn: 'root'})
export class RequestService {
  private url: string = "";
  private user: User;

  constructor(private http: HttpClient) {
  }

  prepareURL(model: string, specific: string) {
    this.url = "http://localhost:8080/" + model;
    if (specific !== "") {
      this.url = (this.url + "/" + specific);
    }
  }

  prepareHeader() {
    const headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.set("AdminNumber", this.user.name);
    return headerOfRequest


  }

  requestOfCart(specific: string, duty: string, cart: ShoppingCart) {
    this.prepareURL("cart", specific);
    return this.http.request<ShoppingCart[]>(duty, this.url,
      {
        body: cart,
        headers: this.prepareHeader()
      })
      .pipe(
     );
  }

  requestOfOrder(specific: string, duty: string, order: Order) {
    this.prepareURL("order", specific);
    this.prepareHeader()
    return this.http.request<Order[]>(duty, this.url,
      {
        body: order,
        headers: this.prepareHeader()
      })
      .pipe();
  }

  requestOfProduct(specific: string, duty: string, product: Product) {
    this.prepareURL("product", specific);
    this.prepareHeader()
    return this.http.request<Product[]>(duty, this.url,
      {
        body: product,
        headers: this.prepareHeader()
      })
      .pipe();
  }
}
