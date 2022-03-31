import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminComponent} from "./admin.component";
import {OrderComponent} from "./orders/order/order.component";
import {EditItemsComponent} from "./edit-items/edit-items.component";
import {OrdersComponent} from "./orders/orders.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {ShopModule} from "../shop/shop.module";
import {EditItemComponent} from "./edit-items/edit-item/edit-item.component";
import {AdminNavComponent} from './admin-nav/admin-nav.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShopModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    OrderComponent,
    EditItemsComponent,
    EditItemComponent,
    OrdersComponent,
    OrderComponent,
    AdminNavComponent,
  ],
  exports:[
    AdminComponent,
    OrderComponent,
    EditItemsComponent,
    EditItemComponent,
    OrdersComponent,
    OrderComponent,
  ]
})
export class AdminModule{}
