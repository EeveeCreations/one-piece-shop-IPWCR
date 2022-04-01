import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {StartPageComponent} from './start-page/start-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HttpClientModule} from "@angular/common/http";
import {DecorationComponentsModule} from "./shared/deceration-components/decoration-components.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    ErrorPageComponent,
  ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      DecorationComponentsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
