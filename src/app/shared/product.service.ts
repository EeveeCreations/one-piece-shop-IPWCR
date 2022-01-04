import {Injectable} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../shop/item/product.model";

@Injectable()
export class ProductService {

  constructor(private route: Router,
              private activeRoute: ActivatedRoute) {
  }

  allProducts: Product[] = [  new Product(
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


}
