import {ShopComponent} from "./shop.component";
import {ProductResolver} from "../shared/resolvers/product-resolver.services";
import {CompleteComponent} from "./alert/complete/complete.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ShopPageComponent} from "./shop-page/shop-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component";

const routes = [
  {
    path: '', component: ShopComponent, children: [
      {path: 'products', component: ShopPageComponent , resolve: [ProductResolver]},
      {path: 'myCart', component: CartPageComponent}, //, canActivate:[UserGuard]
      {path: '**', redirectTo: 'products'}
    ]
  },
  {path: 'paid', component: CompleteComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}

