import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from "./start-page/start-page.component";
import {AdminComponent} from "./admin/admin.component";
import {EditItemsComponent} from "./admin/edit-items/edit-items.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ShopComponent} from "./shop/shop.component";
import {OrdersComponent} from "./admin/orders/orders.component";
import {PaymentComponent} from "./shop/alert/payment/payment.component";
import {CompleteComponent} from "./shop/alert/payment/complete/complete.component";
import {EditItemComponent} from "./admin/edit-items/edit-item/edit-item.component";

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {
    path: 'shop', component: ShopComponent, children: [
      {
        path: 'payment', component: PaymentComponent, children: [
          {path: ':cartId', component: CompleteComponent}
        ]}
    ]},
  {path: 'admin', component: AdminComponent, children: [
      {path: 'orders', component: OrdersComponent},
      {path: 'editShop', component: EditItemsComponent, children: [
          {path: ':id/edit', component: EditItemComponent}
        ]}
    ]},
  {path: '**', component: ErrorPageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
