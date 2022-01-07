import {Injectable} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../shop/item/product.model";

@Injectable()
export class ItemService {

  constructor(private route: Router,
              private activeRoute: ActivatedRoute) {
  }

  allItems: Product[] = [];

  additem(){

  }
  updateitem(){

  }
  deleteitem(){

  }

  getItems():Product[]{
    return this.allItems.slice();
  }

  getAllItems(): Product[]{
    return this.allItems.slice();
  }

}
