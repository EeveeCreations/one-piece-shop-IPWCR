import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Order} from "../models/order.model";
import {ShoppingCart} from "../models/shopping-cart.model";

@Injectable({providedIn: 'root'})
export class OrderService {
  private orders: Order[] = [];
  orderEvent: Subject<Order[]> = new Subject<Order[]>();

  constructor() {
  }

  updateOrder(order: Order) {
    const index = this.orders.indexOf(order);
    this.orders[index] = order[0];
    this.orderEvent.next(this.orders.slice());
  }

  addOrder(shoppingCart: ShoppingCart) {
    console.log(shoppingCart)
    const newOrder: Order = new Order(null, shoppingCart, false);
    this.orders.push(newOrder);
    this.orderEvent.next(this.orders.slice());
  }

  deleteOrder(id: number) {
    this.orders.splice(id, 1);
    this.orderEvent.next(this.orders.slice());
  }

  getOrders() {
    return this.orders.slice();
  }

  setOrders(newOrders: Order[]) {
    this.orders = newOrders;
    this.orderEvent.next(this.orders.slice());
  }

  getOrder(id: number): Order {
    return this.orders[id];
  }
}
