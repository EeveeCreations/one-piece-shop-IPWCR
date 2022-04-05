import {Order} from "../models/order.model";
import {Injectable, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {OrderService} from "./order.service";
import {RequestService} from "../requests/request.service";
import {Product} from "../models/product.model";
import {ShoppingCart} from "../models/shopping-cart.model";

@Injectable({providedIn: 'root'})
export class OrderHandlingService implements OnInit{
  activeOrders:Order[] = [];
  orderEvent: Subject<Order[]> = new Subject<Order[]>();

  ranCart: ShoppingCart;
  ranProduct: Product;
  constructor(private orderService: OrderService,
              private requestService: RequestService) {  }

  ngOnInit(): void {
   this.activeOrders = this.getAllOrdersOfDB();
  }

  ngOnDestroy(): void {
  }

  addNewOrder(shoppingCart: ShoppingCart){
    const newOrder = new Order(null,shoppingCart, false);
    this.requestService.requestOfOrder('new','post',newOrder).subscribe((order)=>{
      this.activeOrders.push(order[0]);
      }
    )
  }

  updateOrder(index: number, order: Order) {
    return this.requestService.requestOfOrder(index.toString(),'put',order);
  }

  deleteOrder(index: number) {
    return this.requestService.requestOfOrder(index.toString(),'delete',null);
  }

  getAllOrdersOfDB():Order[] {
    return this.orderService.getOrders();
  }
  getAllOrders(){
    return this.activeOrders;
  }
}
