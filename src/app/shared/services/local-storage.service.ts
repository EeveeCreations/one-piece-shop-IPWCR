import {Injectable, OnInit} from "@angular/core";
import {User} from "../models/user.model";
import {UserRole} from "../models/user-role.model";
import {ShoppingCart} from "../models/shopping-cart.model";
import {CartItem} from "../models/cart-item.model";

@Injectable({providedIn: 'root'})
export class LocalStorageService implements OnInit{
  private USER :string = 'currentUser';
  private backUp: User;
  private SHOPPING_CART: string = 'shoppingCart';

  ngOnInit(): void {
    window.onstorage = () => this.onChangeOfStorage();
  }

  removeItemFromLocalStorage(itemName: string) {
    localStorage.removeItem(itemName);
  }

  storeUser(currentUser: User) {
    this.backUp = currentUser;
    localStorage.setItem(this.USER, JSON.stringify(currentUser));
  }

  removeUser() {
    localStorage.removeItem(this.USER);
  }

  getUserFromLocalStorage(): User {
    const currentUser: {
      id: number,
      _name: string,
      _email: string,
      _roles: UserRole[]
      _token: string,
      _refreshToken: string
    } = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      return;
    }
    return new User(null, currentUser._name, currentUser._email,
      currentUser._roles, currentUser._token, currentUser._refreshToken);
  }

  getCartFromLocalStorage(): ShoppingCart {
    const newCart: {
      _amountOfProducts: number,
      _cartItems: CartItem[],
      _totalPrice: number,
      _isOrdered: boolean
    } = JSON.parse(localStorage.getItem(this.SHOPPING_CART));
    if (!newCart) {
      return;
    }
    // let cartItems: CartItem[] = []
    // for (let item of newCart.cartItems){
    //   cartItems.push(item);
    // }
    return new ShoppingCart(newCart._amountOfProducts, newCart._cartItems, newCart._totalPrice, newCart._isOrdered);
  }

  storeCart(cart: ShoppingCart) {
    localStorage.setItem(this.SHOPPING_CART, JSON.stringify(cart));
  }

  removeCart() {
    localStorage.removeItem(this.SHOPPING_CART);
  }

  onChangeOfStorage(){
      this.removeUser();
      this.removeCart();
  }

}
