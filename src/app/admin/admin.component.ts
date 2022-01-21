import { Component, OnInit } from '@angular/core';
import {Product} from "../shared/models/product.model";
import {ShopService} from "../shared/services/shop.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  shopItems: Product[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }

}
