import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shop/item/product.model";
import {ProductService} from "../../shared/product.service";

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
  @Input() shopItems: Product[];
  isEditing: boolean = false;

  constructor(private productService: ProductService) {
    this.shopItems = productService.getProducts();
  }

  ngOnInit(): void {

  }


  onEditItem(item: Product) {
    this.isEditing = true;
  }
}
