import {Component, OnInit} from '@angular/core';
import {Order} from '../../shared/models/order.model'
import {OrderHandlingService} from "../../shared/services/order-handling.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersSubscription: Subscription = new Subscription();
  orders: Order[];

  constructor(
    private orderHandlingService: OrderHandlingService
  ){
  }

  ngOnInit(): void {
    this.orders = this.orderHandlingService.getAllOrders();
    this.ordersSubscription = this.orderHandlingService.orderEvent.subscribe(newOrders => {
      console.log(this.orders)
        this.orders = newOrders;
      }
    );
    }


}
