import { Component } from '@angular/core';
import { AppComponent }  from '../../../app.component';

@Component({
    selector: 'extra-error',
    templateUrl: './extra-error.html'
})

export class ExtraErrorPage {
  constructor( app: AppComponent) {
      app.setPageSettings({
        pageEmpty: true
      });
  }
}
