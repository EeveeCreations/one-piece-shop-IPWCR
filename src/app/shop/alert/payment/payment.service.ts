import {Subject} from "rxjs";
import {ShoppingCart} from "../../shopping-cart/shopping-cart.model";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class PaymentService implements OnInit{
  public isPaymentOngoing: Subject<boolean> = new Subject<boolean>();
  private isPaying: boolean;
  paymentCart: ShoppingCart;

  ngOnInit(): void {
  }

  StartPayment(){
    this.isPaying = true;
    this.isPaymentOngoing.next(this.isPaying);
  }

  paymentCompleted(){
    this.isPaying = false;
    this.isPaymentOngoing.next(this.isPaying);

  }
  paymentCanceled(){
    this.isPaying = false;
    this.isPaymentOngoing.next(this.isPaying);

  }



}
