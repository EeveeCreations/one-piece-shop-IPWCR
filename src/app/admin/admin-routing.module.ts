import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {OrdersComponent} from "./orders/orders.component";
import {AuthGuard} from "../shared/authentication/guards/auth.guard";
import {OrdersResolver} from "../shared/resolvers/orders-resolver.service";
import {EditItemsComponent} from "./edit-items/edit-items.component";
import {ProductResolver} from "../shared/resolvers/product-resolver.services";
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', redirectTo:'',component: AdminComponent, children: [
      {path: 'home', component: OrdersComponent, canActivate: [AuthGuard], resolve: [OrdersResolver]},
      {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], resolve: [OrdersResolver]},
      {path: 'products', component: EditItemsComponent, canActivate: [AuthGuard], resolve: [ProductResolver] , children: [
          {path: ':id', component: EditItemsComponent, canActivate: [AuthGuard],resolve: [ProductResolver]}
        ]},
    ]},
  {path: 'login', component: AuthenticationComponent},
  {path: 'register', component: AuthenticationComponent},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {

}
