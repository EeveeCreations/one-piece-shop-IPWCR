import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {ErrorWarningComponent} from "./error-warning/error-warning.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DropdownDirective} from "../directives/drop-down.directive";

@NgModule({
  imports:[
    CommonModule,
  ],
  declarations:[
    LoadingSpinnerComponent,
    ErrorWarningComponent,
    DropdownDirective
   ],
  exports:[
    LoadingSpinnerComponent,
    ErrorWarningComponent,
    DropdownDirective
  ]
})
export class DecorationComponentsModule{}
