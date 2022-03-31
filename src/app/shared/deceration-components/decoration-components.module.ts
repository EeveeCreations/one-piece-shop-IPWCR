import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {ErrorWarningComponent} from "./error-warning/error-warning.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DropdownDirective} from "../directives/drop-down.directive";
import { CircusPictureComponent } from './circus-picture/circus-picture.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports:[
    BrowserAnimationsModule,
    CommonModule,
  ],
  declarations:[
    LoadingSpinnerComponent,
    ErrorWarningComponent,
    DropdownDirective,
    CircusPictureComponent
   ],
    exports: [
        LoadingSpinnerComponent,
        ErrorWarningComponent,
        DropdownDirective,
        CircusPictureComponent
    ]
})
export class DecorationComponentsModule{}
