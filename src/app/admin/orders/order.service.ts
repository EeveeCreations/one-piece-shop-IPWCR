import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Order} from "./order.model";
import {Product} from "../../shop/item/product.model";
import {CartItem} from "../../shop/shopping-cart/cart-item.model";
import {ShoppingCart} from "../../shop/shopping-cart/shopping-cart.model";

@Injectable()
export class OrderService {
  ranCart: ShoppingCart;
  ranCartItem: CartItem[];
  ranProduct: Product;
  orders:Order[];
  orderEvent: Subject<Order[]>

  // TODO:Delete these
  constructor() {
    this.ranProduct = new Product(BigInt('2'), 'testProduct', ' THis is a product for in teh Order', 22.50, 'mug,Luffy', "https://st4.depositphotos.com/1833357/21353/i/600/depositphotos_213534652-stock-photo-happy-bride-take-selfie-her.jpg")
    this.ranCartItem = [new CartItem(this.ranCart, this.ranProduct, 2)]
    this.ranCart = new ShoppingCart(2, this.ranCartItem, 22.50, false)
     this.orders= [new Order(this.ranCart, false)];
  }

  updateOrder(order: Order){
    const index = this.orders.indexOf(order);
    this.orders.splice(index, 1);
    this.orderEvent.next(this.orders.slice());
  }

  sendOrder

  getAllOrders() {
    return [new Order(this.ranCart, false)];
  }
}
