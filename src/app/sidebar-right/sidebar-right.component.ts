import { Component, Output, EventEmitter, ElementRef, HostListener } 		 from '@angular/core';
import * as global 			 from '../globals';

@Component({
  selector: 'sidebar-right',
  templateUrl: './sidebar-right.component.html'
})

export class SidebarRightComponent {
  global = global;
	slimScrollOptions = global.whiteSlimScrollOptions;
	@Output() hideMobileRightSidebar = new EventEmitter<boolean>();

	@HostListener('document:click', ['$event'])
  clickout(_event :any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
		  this.hideMobileRightSidebar.emit(true);
    }
  }

  constructor(private eRef: ElementRef) {
  }
}
