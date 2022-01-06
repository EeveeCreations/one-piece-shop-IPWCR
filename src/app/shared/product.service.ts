import {Injectable} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../shop/item/product.model";
import {Subject} from "rxjs";
import {RequestService} from "./Requests/request.service";

@Injectable()
export class ProductService {
  private products: Product[] = [  new Product(
    BigInt('1'), "MugofLufy", "One hell of a cool mug", 12.50, 'lufy,mug', "https://www.get-digital.nl/web/getdigital/gfx/CartItems/__generated__resized/1100x1100/19611OP_barrel_mug_front.jpg"
  ),
    new Product(
      BigInt('2'), "MugofLufy", "One hell of a cool mug", 12.50, 'lufy,mug', "https://www.get-digital.nl/web/getdigital/gfx/CartItems/__generated__resized/1100x1100/19611OP_barrel_mug_front.jpg"
    ),
    new Product(
      BigInt('3'), "MugofLufy", "One hell of a cool mug", 12.50, 'lufy,mug', "https://www.get-digital.nl/web/getdigital/gfx/CartItems/__generated__resized/1100x1100/19611OP_barrel_mug_front.jpg"
    ), new Product(
      BigInt('1'), "MugofLufy", "One hell of a cool mug", 12.50, 'lufy,mug', "https://www.get-digital.nl/web/getdigital/gfx/CartItems/__generated__resized/1100x1100/19611OP_barrel_mug_front.jpg"
    ),
    new Product(
      BigInt('2'), "MugofLufy", "One hell of a cool mug", 12.50, 'lufy,mug', "https://www.get-digital.nl/web/getdigital/gfx/CartItems/__generated__resized/1100x1100/19611OP_barrel_mug_front.jpg"
    ),
    new Product(
      BigInt('3'), "MugofLufy", "One hell of a cool mug", 12.50, 'lufy,mug', "https://www.get-digital.nl/web/getdigital/gfx/CartItems/__generated__resized/1100x1100/19611OP_barrel_mug_front.jpg"
    ), new Product(
      BigInt('1'), "MugofLufy", "One hell of a cool mug", 12.50, 'lufy,mug', "https://www.get-digital.nl/web/getdigital/gfx/CartItems/__generated__resized/1100x1100/19611OP_barrel_mug_front.jpg"
    ),
    new Product(
      BigInt('2'), "MugofLufy", "One hell of a cool mug", 12.50, 'lufy,mug', "https://www.get-digital.nl/web/getdigital/gfx/CartItems/__generated__resized/1100x1100/19611OP_barrel_mug_front.jpg"
    ),
    new Product(
      BigInt('3'), "MugofLufy", "One hell of a cool mug", 12.50, 'lufy,mug', "https://www.get-digital.nl/web/getdigital/gfx/CartItems/__generated__resized/1100x1100/19611OP_barrel_mug_front.jpg"
    )];
  private productEvent: Subject<Product[]>

  constructor(private requestService: RequestService,
              private activeRoute: ActivatedRoute) {
  }

  addProduct(){


  }
  updateProduct(){

  }
  deleteProduct(){

  }

  getProducts():Product[]{
    return this.products.slice();
  }


  setProducts(newProducts: Product[]): void {
    this.products = newProducts;
    this.productEvent.next(this.products.slice());

  }
}
