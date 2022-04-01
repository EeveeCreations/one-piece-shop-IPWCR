import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from "../shared/services/shopping-cart.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers:[ShoppingCartService]
})
export class ShopComponent implements OnInit , OnDestroy{

  constructor() {
  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
