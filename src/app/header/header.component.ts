import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() pageSidebarTwo : any;
	@Output() toggleSidebarRightCollapsed = new EventEmitter<boolean>();
	@Output() toggleMobileSidebar = new EventEmitter<boolean>();
	@Output() toggleMobileRightSidebar = new EventEmitter<boolean>();

  mobileSidebarToggle() {
		this.toggleMobileSidebar.emit(true);
  }
  mobileRightSidebarToggle() {
		this.toggleMobileRightSidebar.emit(true);
  }
	toggleSidebarRight() {
		this.toggleSidebarRightCollapsed.emit(true);
	}

  constructor( _renderer: Renderer2) {

  }
}
