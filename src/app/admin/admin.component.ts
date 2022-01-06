import { Component, OnInit } from '@angular/core';
import {OrderService} from "./orders/order.service";
import {Product} from "../shop/item/product.model";
import {ShopService} from "../shop/shop.service";
import {RequestService} from "../shared/Requests/request.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [OrderService]
})
export class AdminComponent implements OnInit {
  shopItems: Product[];

  constructor(private shopService: ShopService,
              private requestService:RequestService) { }

  ngOnInit(): void {
    this.getProductItems()
  }

  private getProductItems() {
    this.shopItems = this.shopService.getAllShopItems()

  }

  openOrders() {
      this.requestService.requestOfOrder("all", "get",null)
  }

  editShop() {
    this.requestService.requestOfProduct("all", "get",null)
  }
}
