import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/product/product.model";
import {ProductService} from "../../shared/product/product.service";
import {RequestService} from "../../shared/requests/request.service";

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
  @Input() shopItems: Product[];
  isEditing: boolean = false;

  constructor(private productService: ProductService,
              private requestService: RequestService) {
    this.shopItems = productService.getProducts();
  }

  ngOnInit(): void {

  }


  onEditItem(item: Product) {
    this.isEditing = true;
  }


}
