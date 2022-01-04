import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ShoppingCartComponent} from './shop/shopping-cart/shopping-cart.component';
import {StartPageComponent} from './start-page/start-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AdminComponent} from './admin/admin.component';
import {EditItemsComponent} from './admin/edit-items/edit-items.component';
import {ShopComponent} from './shop/shop.component';
import {ItemComponent} from "./shop/item/item.component";
import {DetailComponent} from './shop/item/detail/detail.component'
import {EditItemComponent} from './admin/edit-items/edit-item/edit-item.component';
import {AlertComponent} from './shop/alert/alert.component';
import {OrdersComponent} from './admin/orders/orders.component';
import {OrderComponent} from './admin/orders/order/order.component';
import {PaymentComponent} from "./shop/alert/payment/payment.component";
import {CompleteComponent} from "./shop/alert/payment/complete/complete.component";
import {ItemService} from "./shared/item.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    StartPageComponent,
    ErrorPageComponent,
    AdminComponent,
    EditItemsComponent,
    ItemComponent,
    DetailComponent,
    PaymentComponent,
    CompleteComponent,
    ShopComponent,
    EditItemComponent,
    AlertComponent,
    OrdersComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
