import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Product} from "../../shared/product/product.model";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input('product') product: Product;
  @Input('i') index: number;
  @ViewChild('element') element: ElementRef;
  private inCart: boolean = true;

  constructor(private shoppingCartService: ShoppingCartService,
              private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.inCart = this.shoppingCartService.seeIfItemInCart(this.product)
    if (this.inCart) {
      this.element.nativeElement.classList.add('added');
    }
  }

  alertToEvent() {
    this.shopService.GiveAlertAboutItem(this.product);
  }

  OnClickProduct(){

    // return this.shoppingCartService.seeIfItemInCart(this.product);

  }

  isInCart(): boolean {

    return this.inCart;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inCart = this.shoppingCartService.seeIfItemInCart(this.product)
    if (this.inCart) {
      this.element.nativeElement.className = 'added';

    }
  }
}
