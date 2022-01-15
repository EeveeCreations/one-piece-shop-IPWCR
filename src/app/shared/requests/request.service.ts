import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user.model";
import {ShoppingCart} from "../models/shopping-cart.model";
import {Order} from "../../admin/orders/order.model";
import {Product} from "../models/product.model";
import {BehaviorSubject, tap} from "rxjs";
import {ProductService} from "../services/product.service";
import {OrderService} from "../services/order.service";
import {AuthService} from "../services/auth.service";

@Injectable({providedIn: 'root'})
export class RequestService {
  private url: string = "";
  private subscription;
  private user: User;

  constructor(private http: HttpClient,
              // private authService: AuthService,
              private productService:ProductService,
              private orderService:OrderService) {
    // authService.user.subscribe();
  }

  prepareURL(model: string, specific: string) {
    this.url = "https://localhost:7004/" + model;
    if (specific !== "") {
      this.url = (this.url + "/" + specific);
    }
    return this.url;
  }

  prepareHeader() {
    const headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.set("adminId", '1');
    return headerOfRequest;
  }

  requestOfCart(specific: string, duty: string, cart: ShoppingCart) {
    this.url = this.prepareURL("cart", specific);
    return this.http.request<ShoppingCart[]>(duty, this.url,
      {
        body: cart,
        headers: this.prepareHeader()
      })
      .pipe(
     );
  }

  requestOfOrder(specific: string, duty: string, order: Order) {
    this.url = this.prepareURL("order", specific);
    this.prepareHeader();
    return this.http.request<Order[]>(
      duty, this.url,
      {
        body: order,
        headers: this.prepareHeader()
      })
      .pipe(
        tap(orders => {
          if (specific == 'all') {
            this.orderService.setOrders(orders);
          }
        }));
  }

  requestOfProduct(specific: string, duty: string, product: Product) {
    console.log(product)
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
