import {Component, OnInit} from '@angular/core';
import {Order} from './order.model'
import {RequestService} from "../../shared/requests/request.service";
import {OrderHandelingService} from "../../shared/services/order-handeling.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersSubscription: Subscription;
  orders: Order[];

  constructor(
    private orderHandlingService: OrderHandelingService,
    private requestService: RequestService
  ){
  }

  ngOnInit(): void {
    this.orders = this.orderHandlingService.getAllOrders();
    this.ordersSubscription = this.orderHandlingService.orderEvent.subscribe(newOrders => {
        this.orders = newOrders;
      }
    );
    console.log(this.orders);

    }


}
