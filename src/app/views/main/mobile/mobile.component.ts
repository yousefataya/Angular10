import { Component } from '@angular/core';
import {  Platform } from '@ionic/angular';
import { StatusBar } from 'ionic-native';
@Component({ templateUrl: "./mobile.component.html" })
export class AppMobileComponent {
  
  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
