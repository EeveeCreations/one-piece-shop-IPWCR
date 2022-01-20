import {ShopComponent} from "./shop.component";
import {ProductResolver} from "../shared/resolvers/product-resolver.services";
import {PaymentComponent} from "./alert/payment/payment.component";
import {CompleteComponent} from "./alert/payment/complete/complete.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

const routes = [{
  path: '', component: ShopComponent, resolve: [ProductResolver], children: [
    {
      path: 'payment', component: PaymentComponent, children: [
        {path: ':cartId', component: CompleteComponent}
      ]
    }
  ]
},]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}

