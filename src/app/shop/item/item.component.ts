import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Product} from "../../shared/models/product.model";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ShopService} from "../../shared/services/shop.service";
import {CartItem} from "../../shared/models/cart-item.model";
import {Subscription} from "rxjs";

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
    this.checkInCart()
  }

  ngOnInit(): void {
  }
  ngOnDestroy():void {

  }

  alertOfItem() {
    this.shopService.giveAlertAboutItem(this.product);
    this.checkInCart();
  }

  amountOfItemChange(isAdd: boolean) {
      this.shopService.changeAmountOfItem(this.product, isAdd)
  }

  checkInCart(){
    if ( this.shoppingCartService.seeIfItemInCart(this.product)) {
          this.cartItem = this.shoppingCartService.getItemOfCart(this.product);
          // this.element.nativeElement.className = 'added';
    }
  }
}
