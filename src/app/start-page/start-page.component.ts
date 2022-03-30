import {Component, OnInit} from '@angular/core';
import {Product} from "../shared/models/product.model";
import {Subscription} from "rxjs";
import {ShoppingCartService} from "../shared/services/shopping-cart.service";
import {ProductService} from "../shared/services/product.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']

})
export class StartPageComponent implements OnInit {
  public newProducts: Product[];
  private subscriptionOfProducts: Subscription;
  currentProduct: Product;
  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService
  ) {
    this.setSubscriptions();
  }

  setSubscriptions() {
    this.subscriptionOfProducts = this.productService.productEvent.subscribe(
      (products: Product[]) => {
        this.setNewProducts(products)
      }
    );
  }

  setNewProducts(products: Product[]) {
    for(let i = 0; i < 5; i++){
      this.newProducts.push(products[products.length -i])
    }
  }

  rollTheNewProducts(){
    let amountPictures = this.newProducts.length -1;
    let i;
    setInterval(function () {
        if (i === 0) {
          this.newProducts[amountPictures].style.display = "none";
        } else {
          this.newProducts[i - 1].style.display = "none";
        }
        this.newProducts[i].style.display = "block";
        i++;
        if (i === amountPictures + 1) {
          i = 0
        }
      }
      , 3000);
  }
  ngChangePicture(){

  }

  ngOnDestroy(): void {
    this.subscriptionOfProducts.unsubscribe();
  }

  ngOnInit(): void {
    this.setNewProducts(this.productService.getProducts());
  }

}
