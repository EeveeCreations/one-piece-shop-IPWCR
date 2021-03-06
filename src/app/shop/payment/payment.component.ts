import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCart} from "../../shared/models/shopping-cart.model";
import {CartItem} from "../../shared/models/cart-item.model";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../shared/authentication/auth.service";
import {UserRole} from "../../shared/models/user-role.model";
import {NewUser} from "../../shared/models/new-user.model";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  public cart: ShoppingCart;
  private paymentSubscription: Subscription;
  public clientForm: FormGroup;
  public cartItems: CartItem[];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cartService: ShoppingCartService,
    private authService: AuthService
  ) {}


  ngOnInit(): void {
        this.cart = this.cartService.returnCart();
        this.cartItems = this.cart.cartItems;
        this.initForm();
  }

  initForm(){
    this.clientForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'mail': new FormControl(null, [Validators.email, Validators.required]),
    });
  }

  onPaymentSucceed(){
    const mail = this.clientForm.get('mail').value;
    const name = this.clientForm.get('name').value;

    if(this.authService.user == null){
      const newUser = new NewUser(name,mail,"",[new UserRole(null,"UN_REG_CLIENT")])
      this.authService.signUp(newUser);
    }

    this.router.navigate(['/paid'+name],{relativeTo:this.activeRoute});
    this.cartService.buyTheCart(false);
  }

  onCancelPayment(){
    this.cartService.buyTheCart(false);
  }

  getPrice() {
    return this.cart.totalPrice.valueOf();
  }
}
