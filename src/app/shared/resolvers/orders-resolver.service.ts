import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RequestService} from "../requests/request.service";
import {Order} from "../models/order.model";
import {OrderService} from "../services/order.service";

@Injectable({providedIn: 'root'})
export class OrdersResolver implements Resolve<Order[]>{
  constructor(private requestService: RequestService,
              private orderService: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> | Promise<Order[]> | Order[] {
    const Orders = this.orderService.getOrders();
    if (Orders.length === undefined || Orders.length === 0) {
      return this.requestService.requestOfOrder("all","get",null);
    }
    return Orders
  }

}
