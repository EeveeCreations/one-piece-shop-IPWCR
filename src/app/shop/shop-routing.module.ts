import {ShopComponent} from "./shop.component";
import {ProductResolver} from "../shared/resolvers/product-resolver.services";
import {CompleteComponent} from "./alert/complete/complete.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', component: ShopComponent, resolve: [ProductResolver]},
  {path: 'paid', component: CompleteComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}

