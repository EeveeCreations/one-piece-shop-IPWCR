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
    // for(let i = 0; i < 5; i++){
    //   this.newProducts.push(products[products.length -i])
    // }
    this.newProducts = [
      new Product(2, "HELOOW", "EYG", 232, "Dugfffy", "https://static.independent.co.uk/2022/01/17/13/jovian_exoplanet.jpg?quality=75&width=1200&auto=webp")
      , new Product(6, "Woow", "EYG", 232, "Dugfffy", "https://img.pixers.pics/pho_wat(s3:700/FO/71/02/27/95/700_FO71022795_46be9723deea229b4463a1b4b657068e.jpg,700,485,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,435,jpg)/fotobehang-alien-planet-3d-gesmolten-computer-kunstwerk.jpg.jpg")
      , new Product(4, "idee", "EYG", 232, "Dugfffy", "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2021/10/location_of_possible_planet_in_m51/23742967-1-eng-GB/Location_of_possible_planet_in_M51_pillars.jpg")

    ];
  }

  ngOnDestroy(): void {
    this.subscriptionOfProducts.unsubscribe();
  }

  ngOnInit(): void {
    this.setNewProducts(this.productService.getProducts());
  }

}
