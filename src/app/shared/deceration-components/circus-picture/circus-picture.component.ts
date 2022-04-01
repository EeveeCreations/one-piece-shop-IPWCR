import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-circus-picture',
  templateUrl: './circus-picture.component.html',
  styleUrls: ['./circus-picture.component.css'],
  animations: [
    trigger('Circus', [
      state('moving', style({
        transform: 'translateX(-100)'
      })),
      state('still', style({
        transform: 'translateX(100)'
      })),
      transition('moving <=> still', animate(300)),

    ])
  ]
})
export class CircusPictureComponent implements OnInit, OnDestroy {
  @Input('products') listOfProducts: Product[];
  currentProduct: Product;
  state = 'moving';
  private interval: number;

  constructor() {
    this.startSwitching()
  }

  ngOnInit(): void {

  }

  private startSwitching() {
    this.interval = setInterval(() => this.switchPicture(), 3000);
  }

  private switchPicture() {
    if (this.listOfProducts.indexOf(this.currentProduct) != this.listOfProducts.length - 1) {
      this.currentProduct = this.listOfProducts[this.listOfProducts.indexOf(this.currentProduct) + 1];
    } else {
      this.currentProduct = this.listOfProducts[0];
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
