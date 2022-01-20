import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {ErrorWarningComponent} from "./error-warning/error-warning.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  imports:[
    CommonModule,
  ],
  declarations:[
    LoadingSpinnerComponent,
    ErrorWarningComponent
   ],
  exports:[
    LoadingSpinnerComponent,
    ErrorWarningComponent
  ]
})
export class DecorationComponentsModule{}
