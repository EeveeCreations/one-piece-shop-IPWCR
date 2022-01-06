import {Component, Input, OnInit} from '@angular/core';
import {ItemComponent} from "../../shop/item/item.component";
import {Product} from "../../shop/item/product.model";
import {ItemService} from "../../shared/item.service";

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
  @Input() shopItems: Product[];

  constructor(private itemService: ItemService) {
    this.shopItems = itemService.getAllItems()
  }

  ngOnInit(): void {

  }


}
