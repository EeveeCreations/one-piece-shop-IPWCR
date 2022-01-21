import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCart} from "../../../shared/models/shopping-cart.model";
import {CartItem} from "../../../shared/models/cart-item.model";
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRole} from "../../../shared/models/user-role.model";
import {AuthService} from "../../../shared/services/auth.service";
import {NewUser} from "../../../shared/models/new-user.model";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit , OnDestroy{
  public cart: ShoppingCart;
  private inPayingMode: boolean;
  private paymentSubscription: Subscription;
  public clientForm: FormGroup;
  cartItems: CartItem[];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cartService: ShoppingCartService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.paymentSubscription = this.cartService.paymentEvent.subscribe( (isPaying: boolean) =>{
      this.inPayingMode = isPaying;
      this.cart = this.cartService.returnCart();
      this.cartItems = this.cart.cartItems;
    });
    this.initForm();
  }

  initForm(){
    this.clientForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'mail': new FormControl(null, [Validators.email, Validators.required]),
    });
  }
  onPaymentSucceed(){
    const mail = this.clientForm.get('mail').value
    const name = this.clientForm.get('name').value

    if(this.authService.user == null){
      const newUser = new NewUser(name,mail,"",[new UserRole(3,"UN_REG_CLIENT")])
      this.authService.signUp(newUser);
    }
    this.router.navigate(['paid'],{relativeTo:this.activeRoute});
    this.cartService.buyTheCart(false);
  }

  onCancelPayment(){
    this.cartService.buyTheCart(false);
  }

  ngOnDestroy() {
    this.paymentSubscription.unsubscribe();
  }
}
