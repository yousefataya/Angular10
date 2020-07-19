import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { AppConferenceComponent } from 'src/app/views/main/conference/conference.component';
const routes: Routes = [
  { path: "conference", component: AppConferenceComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppConferenceComponent]
})
export class ConferencePageModule { }
