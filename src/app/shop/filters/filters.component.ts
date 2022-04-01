import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product.model";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{
  products: Product[];
  productCategories: string[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.setAllCategories()

  }

  setAllCategories() {
    let categorise: string[] =[];
    for(const product of this.products){
      for(const category of product.category.split(',')){
        if(categorise.indexOf(category.toLowerCase()) == -1) {
          categorise.push(category.toLowerCase());
        }
      }
    }
    this.productCategories = categorise.sort();
  }


}
