import {Component, OnInit} from '@angular/core';
import {Product} from "../../../shared/models/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {RequestService} from "../../../shared/requests/request.service";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  editItemForm: FormGroup;
  isEditing: boolean = false;
  index: number;
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
    this.startSubscribe();

  }

  private startSubscribe() {
    this.activeRoute.queryParams.subscribe(
      (params: Params) => {
        this.currentId = +params[0];
        this.index= +params[1];
        this.isEditing = !isNaN(+params[0]);
        this.initForm();
      }
    );
  }
  initForm() {
    let name = '';
    let description = '';
    let price = 0;
    let category = '';
    let imagePath = '';
    if (this.isEditing) {
      this.product = this.productService.getProduct(this.index);
      name = this.product.name;
      description = this.product.description;
      price = this.product.price;
      category = this.product.category;
      imagePath = this.product.imagePath;
    }
    if(name== null){
      this.isEditing == false;
      this.initForm();
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
      this.productService.updateProduct(this.index, this.editItemForm.value);
      this.product = this.editItemForm.value;
      this.saveChanges('put',this.currentId.toString())
    }
    this.redirect();
  }

  private saveChanges(duty:string, id: string) {
    this.requestService.requestOfProduct(id, duty, this.product).subscribe();
  }

  onDelete() {
    this.productService.deleteProduct(this.currentId);
    this.saveChanges('delete',this.currentId.toString());
    this.redirect();
  }

  redirect() {
    this.editItemForm.reset();
    this.isEditing = false;
    this.route.navigate(['../products'],{relativeTo: this.activeRoute, queryParams:[null]});
  }
}
