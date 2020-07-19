import { Component } from '@angular/core';
import { AppComponent }  from '../../../app.component';

@Component({
    selector: 'extra-profile',
    templateUrl: './extra-profile.html'
})

export class ExtraProfilePage {
  lat: number = 40.7143528;
  lng: number = -74.0059731;

  tabs : any = {
    postTab: true,
		aboutTab: false,
		photoTab: false,
		videoTab: false,
		friendTab: false
  };

  showTab(e : any) {
    for (let key in this.tabs) {
      if (key == e) {
        this.tabs[key] = true;
      } else {
  		  this.tabs[key] = false;
      }
  	}
  };

  constructor( app: AppComponent) {
      app.setPageSettings({
        pageContentFullWidth: true
      });
  }
}
