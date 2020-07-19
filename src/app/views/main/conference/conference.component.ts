import { Component } from '@angular/core';
import {  Platform } from '@ionic/angular';
import { StatusBar } from 'ionic-native';
@Component({ templateUrl: "./conference.component.html" })
export class AppConferenceComponent {
  
  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
