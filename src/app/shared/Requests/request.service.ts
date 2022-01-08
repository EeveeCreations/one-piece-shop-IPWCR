import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user.model";
import {ShoppingCart} from "../../shop/shopping-cart/shopping-cart.model";
import {Order} from "../../admin/orders/order.model";
import {Product} from "../../shop/item/product.model";
import {tap} from "rxjs";
import {ProductService} from "../product.service";
import {OrderService} from "../../admin/orders/order.service";

@Injectable({providedIn: 'root'})
export class RequestService {
  private url: string = "";
  private user: User;

  constructor(private http: HttpClient,
              private productService:ProductService,
              private orderService:OrderService) {
  }

  prepareURL(model: string, specific: string) {
    this.url = "https://localhost:7004/" + model;
    if (specific !== "") {
      this.url = (this.url + "/" + specific);
    }
  }

  prepareHeader() {
    const headerOfRequest: HttpHeaders = new HttpHeaders();
    headerOfRequest.set("AdminNumber", "1");
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
      .pipe(
        tap(orders =>{
        this.orderService.setOrders(orders);
      }));
  }

  requestOfProduct(specific: string, duty: string, product: Product) {
    this.prepareURL("product", specific);
    this.prepareHeader()
    return this.http.request<Product[]>(duty, this.url,
      {
        body: product,
        headers: this.prepareHeader()
      }).pipe(
        tap(products =>{
        this.productService.setProducts(products)
        }));

  }
}
