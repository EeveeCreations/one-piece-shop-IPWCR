import {Order} from "./order.model";
import {Injectable, OnInit} from "@angular/core";
import {Subject, Subscription} from "rxjs";
import {OrderService} from "./order.service";
import {RequestService} from "../../shared/requests/request.service";
@Injectable({providedIn: 'root'})
export class OrderHandelingService implements OnInit{
  private orderUpdated: Subscription;

  constructor(private orderService: OrderService,
              private requestService: RequestService) {

  }

  ngOnInit(): void {
  }

  addNewOrder(order:Order){
    return this.requestService.requestOfOrder('','put',order);
  }

  updateOrder(index: number, order: Order) {
    return this.requestService.requestOfOrder(index.toString(),'put',order);
  }

  deleteOrder(index: number) {
    return this.requestService.requestOfOrder(index.toString(),'delete',null);
  }
}
