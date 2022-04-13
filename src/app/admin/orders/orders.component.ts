import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../../shared/models/order.model'
import {OrderHandlingService} from "../../shared/services/order-handling.service";
import {OrderService} from "../../shared/services/order.service";
import {Subscription} from "rxjs";
import {AuthService} from "../../shared/authentication/auth.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit ,OnDestroy{
  ordersSubscription: Subscription;
  orders: Order[] = [];
  isAdmin:boolean ;

  constructor(
    private orderHandlingService: OrderHandlingService,
    private orderService: OrderService,
    private authService: AuthService
  ){
  }

  ngOnInit(): void {
    this.setSubscription();
    }

  private setSubscription() {
    this.ordersSubscription = this.orderService.orderEvent.subscribe(
      (newOrders: Order[]) => {
        this.orders = newOrders;
      }
    );
    this.isAdmin = this.authService.user.value.roles[0].role == "ADMIN";
  }

  ngOnDestroy(): void {
    this.ordersSubscription.unsubscribe();
  }


}
