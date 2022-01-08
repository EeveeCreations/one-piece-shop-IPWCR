import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../shop/item/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../../../shared/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  editItemForm: FormGroup;
  editSubscription: Subscription;
  isEditing: boolean = false;
  currentId: bigint;
  product: Product;

  constructor(private route: Router,
              private activeRoute: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.editSubscription = this.activeRoute.params.subscribe(
      (params: Params) => {
        this.currentId = BigInt(+params['id']);
        this.isEditing = !isNaN(+params['id']);
        this.initForm();
      }
    )
  }
  initForm() {
    let name = '';
    let description = '';
    let price = 0;
    let category = '';
    let imagePath = '';
    if (this.isEditing) {
      this.product = this.productService.getProduct(Number(this.currentId));
      name = this.product.name;
      description = this.product.description;
      price = this.product.price;
      category = this.product.category;
      imagePath = this.product.imagePath;
      this.currentId = this.product.id
    }
    this.editItemForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'desc': new FormControl(description, Validators.required),
      'price': new FormControl(price, Validators.required),
      'category': new FormControl(category, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
    })

  }

  onSubmit() {

    this.redirect()
  }

  onDelete() {
    this.productService.deleteProduct(Number(this.currentId));
    this.redirect()
  }

  redirect() {
    this.editItemForm.reset();
    this.isEditing = false;
    this.route.navigate(['../'], {relativeTo: this.activeRoute});
  }
}
