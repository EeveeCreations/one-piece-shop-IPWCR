import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {OrdersComponent} from "./orders/orders.component";
import {AuthGuard} from "../shared/authentication/guards/auth.guard";
import {OrdersResolver} from "../shared/resolvers/orders-resolver.service";
import {EditItemsComponent} from "./edit-items/edit-items.component";
import {ProductResolver} from "../shared/resolvers/product-resolver.services";
import {RouterModule} from "@angular/router";
import {AuthAdminGuard} from "../shared/authentication/guards/auth-admin.guard";

const routes = [
  {path: '',component: AdminComponent, /*canActivate: [AuthGuard],*/children: [
      {path: '', component: OrdersComponent, resolve: [OrdersResolver]},
      {path: 'orders', component: OrdersComponent, resolve: [OrdersResolver]},
      {path: 'products', component: EditItemsComponent, /*canActivate: [AuthAdminGuard],*/ resolve: [ProductResolver] , children: [
          {path: ':id', component: EditItemsComponent, /*canActivate: [AuthAdminGuard],*/resolve: [ProductResolver]}
        ]},
    ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {

}
