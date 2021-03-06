import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../../shared/models/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {Subscription} from "rxjs";
import {RequestService} from "../../../shared/requests/request.service";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit, OnDestroy {
  editItemForm: FormGroup;
  editSubscription: Subscription;
  isEditing: boolean = false;
  currentId: number;
  product: Product;

  constructor(private route: Router,
              private activeRoute: ActivatedRoute,
              private productService: ProductService,
              private requestService: RequestService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.editSubscription = this.activeRoute.params.subscribe(
      (params: Params) => {
        this.currentId = params['id'];
        this.isEditing = !isNaN(+params['id']);
        console.log(this.isEditing)
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
      this.product = this.productService.getProduct(this.currentId);
      name = this.product.name;
      description = this.product.description;
      price = this.product.price;
      category = this.product.category;
      imagePath = this.product.imagePath;
    }
    this.editItemForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'price': new FormControl(price, Validators.required),
      'category': new FormControl(category, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
    });
  }

  onSubmit() {
    if (!this.isEditing) {
      this.productService.addProduct(this.product = this.editItemForm.value);
      this.saveChanges('put','new')
    } else {
      this.productService.updateProduct(Number(this.currentId), this.editItemForm.value);
      const id = Number(this.product.productNumber).toString();
      console.log(id)
      this.saveChanges('put',id)
    }
    this.redirect();
  }

  private saveChanges(duty:string,id: string) {
    this.requestService.requestOfProduct(id, duty, this.product).subscribe();
  }

  onDelete() {
    this.productService.deleteProduct(this.currentId);
    const id = Number(this.product.productNumber).toString();
    this.saveChanges('delete',id);
    this.redirect();
  }

  redirect() {
    this.editItemForm.reset();
    this.isEditing = false;
    this.route.navigate(['../editshop'], {relativeTo: this.activeRoute});
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
}
