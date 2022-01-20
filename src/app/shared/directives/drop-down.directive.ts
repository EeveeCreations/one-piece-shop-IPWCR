import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding('class.open')  isOpen: boolean = false;
  private PATH_OF_ELEMENT: number = 12;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if(this.isOpen){
      if(!(event.composedPath().length <= this.PATH_OF_ELEMENT)){
        return;
      }
     }
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {
    console.log(elRef.nativeElement);
    // this.PATH_OF_ELEMENT = elRef.nativeElement
  }


}
