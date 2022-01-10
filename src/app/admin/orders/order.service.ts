import {Injectable, OnDestroy, OnInit} from "@angular/core";
import {Subject, Subscription} from "rxjs";
import {Order} from "./order.model";
import {Product} from "../../shared/product/product.model";
import {CartItem} from "../../shop/shopping-cart/cart-item.model";
import {ShoppingCart} from "../../shop/shopping-cart/shopping-cart.model";
import {OrderHandelingService} from "./order-handeling.service";

@Injectable({providedIn: 'root'})
export class OrderService implements  OnInit, OnDestroy{
  orders:Order[];
  orderEvent: Subject<Order[]>;
  ordersSubscription: Subscription;
  orderError: string = null;

  ranCart: ShoppingCart;
  ranCartItem: CartItem[];
  ranProduct: Product;

  constructor(private orderRequest: OrderHandelingService
  ) {
  }
  ngOnInit(): void {
    // TODO:Delete these
    this.ranProduct = new Product(2, 'testProduct', ' THis is a product for in teh Order', 22.50, 'mug,Luffy', "https://st4.depositphotos.com/1833357/21353/i/600/depositphotos_213534652-stock-photo-happy-bride-take-selfie-her.jpg")
    this.ranCartItem = [new CartItem(this.ranCart, this.ranProduct, 2)]
    this.ranCart = new ShoppingCart(2, this.ranCartItem, 22.50, false)
    this.orders= [new Order(this.ranCart, false)];
  }

  updateOrder(order: Order){
    const index = this.orders.indexOf(order);
    this.orderRequest.updateOrder(index,order).subscribe(order =>{
      this.orders[index] = order[0];
    })
    this.orderEvent.next(this.orders.slice());
  }

  deleteOrder(order: Order) {
    const index = this.orders.indexOf(order);
    this.orders.splice(index, 1);
    this.orderRequest.updateOrder(index,order).subscribe();
    this.orderEvent.next(this.orders.slice());

  }

    sendOrder(order:Order){
    this.orderRequest.addNewOrder(order).subscribe( order => {
      this.orders.push(order[0]);
    });
  }

  getAllOrders() {
    return [new Order(this.ranCart, false)];
  }

  getOrders(){
    return this.orders.slice();
    // this.requestService.requestOfOrder("all","put",null).subscribe(
    //   orders =>{
    //    this.setOrders(orders)
    //   },error => {
    //       this.orderError = error
    //   }
    // );
  }

  setOrders(newOrders: Order[]) {
      this.orders = newOrders;
      this.orderEvent.next(this.orders.slice());
  }

  addToOrders(shoppingCart: ShoppingCart) {
    const newOrder: Order = new Order(shoppingCart,false);
    this.orders.push(newOrder);
    this.orderEvent.next(this.orders.slice());
    this.sendOrder(newOrder);
  }

  ngOnDestroy(): void {
  }

}
