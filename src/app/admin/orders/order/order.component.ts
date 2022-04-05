import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../shared/models/order.model";
import {OrderService} from "../../../shared/services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() index: number;
  @Input() order: Order

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
  }

  onChangeConfirmation() {
    this.order.completed = !this.order.completed;
    this.orderService.updateOrder(this.order);
  }

}
