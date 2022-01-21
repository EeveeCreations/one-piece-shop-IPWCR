import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DetailComponent} from "./item/detail/detail.component";
import {PaymentComponent} from "./alert/payment/payment.component";
import {CompleteComponent} from "./alert/complete/complete.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ShopComponent} from "./shop.component";
import {ProductComponent} from "../admin/edit-items/product/product.component";
import {AlertComponent} from "./alert/alert.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ShopRoutingModule} from "./shop-routing.module";
import {ItemComponent} from "./item/item.component";
import { FiltersComponent } from './filters/filters.component';
import { FilterItemComponent } from './filters/filter-item/filter-item.component';
import {DecorationComponentsModule} from "../shared/deceration-components/decoration-components.module";

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    ReactiveFormsModule,
    DecorationComponentsModule,
  ],
  declarations:[
    DetailComponent,
    PaymentComponent,
    CompleteComponent,
    ShoppingCartComponent,
    ItemComponent,
    ShopComponent,
    ProductComponent,
    AlertComponent,
    FiltersComponent,
    FilterItemComponent,
  ],
  exports:[
    DetailComponent,
    PaymentComponent,
    CompleteComponent,
    ItemComponent,
    ShoppingCartComponent,
    ShopComponent,
    ProductComponent,
    AlertComponent,
  ]
})
export class ShopModule{}

