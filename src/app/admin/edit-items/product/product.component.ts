import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shared/models/product.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('item') product: Product;
  @Input()index: number;
  @Input()isEditing: boolean;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  getProductNumber() {
    return Number(this.product.productNumber).toString();
  }

  changeRoute() {
    this.router.navigate([this.getProductNumber()],
      {queryParams:[this.getProductNumber(), this.index],
        relativeTo:this.activatedRoute})
  }
}
