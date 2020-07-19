import { Component, ViewEncapsulation } from '@angular/core';
import { AppComponent }  from '../../../app.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'extra-coming-soon',
    templateUrl: './extra-coming-soon.html',
    encapsulation: ViewEncapsulation.None
})

export class ExtraComingSoonPage {
  constructor( app: AppComponent, private router: Router) {
      app.setPageSettings({
        pageEmpty: true,
        pageBodyWhite: true
      });
  }

  formSubmit(_f: NgForm) {
    this.router.navigate(['dashboard/v2']);
  }
}
