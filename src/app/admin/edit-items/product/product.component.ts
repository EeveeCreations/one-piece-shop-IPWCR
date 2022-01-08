import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shop/item/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('item') product: Product;
  routeId: number;
  constructor() {
    // console.log(this.product.id)
    // this.routeId = Number(this.product.id);
  }

  ngOnInit(): void {
  }

}
