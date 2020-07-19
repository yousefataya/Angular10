import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'page-with-wide-sidebar',
    templateUrl: './page-with-wide-sidebar.html'
})

export class PageSidebarWide {

    constructor( app: AppComponent) {
        app.setPageSettings({
          pageSidebarWide: true
        });
    }
}
