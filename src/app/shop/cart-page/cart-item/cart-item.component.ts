import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../../shared/models/cart-item.model";
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.shoppingCartService.changeItemAmount(this.cartItem.product,false);
  }

  addItem() {
    this.shoppingCartService.changeItemAmount(this.cartItem.product,true);
  }

  getTotalProductPrice() {
    return this.cartItem.product.price * this.cartItem.amount;
  }
}
