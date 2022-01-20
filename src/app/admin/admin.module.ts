import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminComponent} from "./admin.component";
import {OrderComponent} from "./orders/order/order.component";
import {EditItemsComponent} from "./edit-items/edit-items.component";
import {OrdersComponent} from "./orders/orders.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {ShopModule} from "../shop/shop.module";
import {EditItemComponent} from "./edit-items/edit-item/edit-item.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShopModule,
    AdminRoutingModule
  ],
  declarations:[
    AdminComponent,
    OrderComponent,
    EditItemsComponent,
    EditItemComponent,
    OrdersComponent,
    OrderComponent,
    AuthenticationComponent
  ],
  exports:[
    AdminComponent,
    OrderComponent,
    EditItemsComponent,
    EditItemComponent,
    OrdersComponent,
    OrderComponent,
    AuthenticationComponent
  ]
})
export class AdminModule{}
