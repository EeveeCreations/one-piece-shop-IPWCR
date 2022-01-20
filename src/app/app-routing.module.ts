import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from "./start-page/start-page.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {
    path: 'shop', loadChildren: () =>
      import('./shop/shop.module').then(
        (c) => {
         return c.ShopModule
        }
      )
  },
  {
    path: 'admin', loadChildren: () =>
      import('./admin/admin.module').then(
        (c) => {
         return  c.AdminModule
        }
      )
  },
  {path: '**', component: ErrorPageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules,useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
