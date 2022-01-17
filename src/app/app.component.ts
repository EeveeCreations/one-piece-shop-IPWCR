import { Component } from '@angular/core';
import {ShoppingCartService} from "./shared/services/shopping-cart.service";
import {ShopService} from "./shared/services/shop.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingCartService,ShopService]
})
export class AppComponent {
  title = 'one-piece-shop';
}
