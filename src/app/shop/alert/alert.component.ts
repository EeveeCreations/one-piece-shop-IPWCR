import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShopService} from "../../shared/services/shop.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {Product} from "../../shared/models/product.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy{
  productClickSubscription: Subscription;
  isInCart: boolean;
  currentProduct: Product
  constructor(
    private shopService: ShopService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.setSubscriptions();
  }

  private setSubscriptions() {
    this.productClickSubscription = this.shopService.alertItem.subscribe(
      (product) => {
        this.currentProduct = product;
        this.getIsInCart();
        this.shoppingCartService.openAlert();
    });
  }
  getIsInCart(){
    this.isInCart = !this.shoppingCartService.seeIfItemInCart(this.currentProduct);
  }

  updateShoppingCart(){
    this.shoppingCartService.updateCart(this.currentProduct, 'delete', this.isInCart);
    this.closeAlert();
  }

  ngOnDestroy(): void {
    this.productClickSubscription.unsubscribe();
  }

  closeAlert() {
    this.shoppingCartService.closeAlert();
  }
}
