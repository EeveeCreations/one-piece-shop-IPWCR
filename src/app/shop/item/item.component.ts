import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../shared/models/product.model";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShopService} from "../../shared/services/shop.service";
import {CartItem} from "../../shared/models/cart-item.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input('product') product: Product;
  @Input('i') index: number;
  @ViewChild('element') element: ElementRef;
  inCart: boolean = true;
  cartItem: CartItem;

  constructor(private shoppingCartService: ShoppingCartService,
              private shopService: ShopService) {
  }

  ngOnInit(): void {
    if (this.product != undefined) {
      this.checkInCart()
    }
  }
  ngOnDestroy():void {

  }

  alertOfItem() {
    this.shopService.giveAlertAboutItem(this.product);
  }

  amountOfItemChange(isAdd: boolean) {
      this.shopService.changeAmountOfItem(this.product, isAdd)
  }

  checkInCart(){
    if (this.shoppingCartService.seeIfItemInCart(this.product)) {
      this.inCart = true;
      this.cartItem = this.shoppingCartService.getItemOfCart(this.product);
    } else {
      this.inCart = false;
    }
  }
}
