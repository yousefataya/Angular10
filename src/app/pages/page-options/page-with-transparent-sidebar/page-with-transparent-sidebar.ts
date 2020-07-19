import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'page-with-transparent-sidebar',
    templateUrl: './page-with-transparent-sidebar.html'
})

export class PageSidebarTransparent {

    constructor( app: AppComponent) {
        app.setPageSettings({
          pageSidebarTransparent: true
        });
    }
}
