import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {OrdersComponent} from "./orders/orders.component";
import {AuthGuard} from "../shared/guards/auth.guard";
import {OrdersResolver} from "../shared/resolvers/orders-resolver.service";
import {EditItemsComponent} from "./edit-items/edit-items.component";
import {ProductResolver} from "../shared/resolvers/product-resolver.services";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: '', component: AuthenticationComponent},
      {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], resolve: [OrdersResolver],},
      {path: 'editShop', component: EditItemsComponent, canActivate: [AuthGuard], resolve: [ProductResolver]},
      {path: ':id', component: EditItemsComponent, canActivate: [AuthGuard], resolve: [ProductResolver]}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {

}
