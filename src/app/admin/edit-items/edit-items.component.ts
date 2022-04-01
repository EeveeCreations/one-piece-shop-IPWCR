import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product.model";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
  shopItems: Product[];
  productSubscription: Subscription;
  isEditing: boolean = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.shopItems = this.productService.getProducts();
    this.productSubscription = this.productService.productEvent.subscribe(
      (updateProducts:Product[]) =>{
      this.shopItems = updateProducts;
    });
  }

  onEditItem(item: Product) {
    this.isEditing = true;
  }


}
