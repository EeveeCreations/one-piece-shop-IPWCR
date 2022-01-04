import {Component, Input, OnInit} from '@angular/core';
import {ItemComponent} from "../../../shop/item/item.component";
import {Product} from "../../../shop/item/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  editItemForm: FormGroup;
  @Input('item') product:Product;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
    if(this.product !== undefined) {
      this.initForm();
    }
  }
  initForm() {
    const name =  this.product.name;
    const description =  this.product.description;
    const price =  this.product.price;
    const category =  this.product.category;
    const imagePath =  this.product.imagePath;


    this.editItemForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'desc': new FormControl(description, Validators.required),
      'price': new FormControl(price, Validators.required),
      'category': new FormControl(category, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
    })

    }
    onSubmit(){

    }

  onDelete() {

  }
}
