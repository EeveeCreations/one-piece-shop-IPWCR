import {Component, OnInit} from '@angular/core';
import {Order} from './order.model'
import {ShoppingCart} from "../../shop/shopping-cart/shopping-cart.model";
import {CartItem} from "../../shop/shopping-cart/cart-item.model";
import {Product} from "../../shared/product/product.model";
import {OrderService} from "./order.service";
import {RequestService} from "../../shared/requests/request.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Orders: Order[];

  constructor(
    private orderService: OrderService,
    private requestService: RequestService
  ){
  }

  ngOnInit(): void {
    this.Orders = this.orderService.getAllOrders()

    }


}
