import {Component, OnInit} from '@angular/core';
import {Order} from './order.model'
import {ShoppingCart} from "../../shop/shopping-cart/shopping-cart.model";
import {CartItem} from "../../shop/shopping-cart/cart-item.model";
import {Product} from "../../shop/item/product.model";
import {OrderService} from "./order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Orders: Order[];

  constructor(
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.Orders = this.orderService.getAllOrders()

    }

}
