import {ShopComponent} from "./shop.component";
import {ProductResolver} from "../shared/resolvers/product-resolver.services";
import {CompleteComponent} from "./alert/complete/complete.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ShopPageComponent} from "./shop-page/shop-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component";
import {AuthGuard} from "../shared/authentication/guards/auth.guard";

const routes = [
  {
    path: '', component: ShopComponent , children: [
      {path: 'products', component: ShopPageComponent , resolve: [ProductResolver]},
      {path: 'myCart', component: CartPageComponent, canActivate:[AuthGuard]},
      {path: 'paid/:id', component: CompleteComponent},
      {path: '/**', redirectTo: 'products'},
      {path: '', redirectTo: 'products'}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}

