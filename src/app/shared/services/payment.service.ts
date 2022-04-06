import {Injectable, OnInit} from "@angular/core";
import {ShoppingCartService} from "./shopping-cart.service";
import {OrderService} from "./order.service";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({providedIn: "root"})
export class PaymentService implements OnInit{

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService
  ) {

  }
  ngOnInit(): void {
  }

  turnPaymentIntoOrder(id?: string){
    let shoppingCart = this.shoppingCartService.returnCart();
    this.orderService.addOrder(shoppingCart);
    this.FinnishPayment(id);
  }


  private FinnishPayment(id?:string) {
    this.shoppingCartService.buyTheCart(false);
    this.router.navigate(['shop/paid/'+ id],{relativeTo: this.activeRoute});
  }
}
