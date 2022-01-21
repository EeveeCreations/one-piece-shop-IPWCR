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
      {path: 'login', component: AuthenticationComponent},
      {path: 'orders', component: OrdersComponent, resolve: [OrdersResolver],},//canActivate: [AuthGuard],
      {path: 'editShop', component: EditItemsComponent, resolve: [ProductResolver]},//canActivate: [AuthGuard],
      {path: ':id', component: EditItemsComponent,  resolve: [ProductResolver]} //canActivate: [AuthGuard],
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {

}
