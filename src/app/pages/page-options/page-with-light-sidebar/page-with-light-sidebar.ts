import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'page-with-light-sidebar',
    templateUrl: './page-with-light-sidebar.html'
})

export class PageSidebarLight {

    constructor( app: AppComponent) {
        app.setPageSettings({
          pageSidebarLight: true
        });
    }
}
