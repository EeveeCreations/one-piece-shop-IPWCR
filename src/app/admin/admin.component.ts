import { Component, OnInit } from '@angular/core';
import {OrderService} from "../shared/services/order.service";
import {Product} from "../shared/models/product.model";
import {ShopService} from "../shared/services/shop.service";
import {RequestService} from "../shared/requests/request.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  shopItems: Product[];

  constructor(private shopService: ShopService,
              private requestService:RequestService) { }

  ngOnInit(): void {
    this.getProductItems()
  }

  private getProductItems() {
    this.shopItems = this.shopService.getAllShopItems();

  }

  openOrders() {
      // this.requestService.requestOfOrder("all", "get",null).subscribe();
  }
}
