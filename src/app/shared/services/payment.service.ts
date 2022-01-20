import {ShoppingCart} from "../models/shopping-cart.model";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class PaymentService implements OnInit{
  private isPaying: boolean;
  paymentCart: ShoppingCart;

  ngOnInit(): void {
  }


}
