import { Component, OnInit } from '@angular/core';
import { AppComponent }  from '../../../app.component';
import * as global from '../../../globals';

@Component({
    selector: 'email-compose',
    templateUrl: './email-compose.html'
})

export class EmailComposePage implements OnInit {
	global = global;
    tags : any;

  ngOnInit() {
    this.tags = [{ 'displayValue': 'bootstrap@gmail.com'},{ 'displayValue' : 'google@gmail.com'}];
  }

  onTagsChanged(_event:any) {
  }

  constructor( app: AppComponent) {
        app.setPageSettings({
        pageContentFullHeight: true,
        pageContentFullWidth: true
      });
  }
}
