import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { AppMobileComponent } from 'src/app/views/main/mobile/mobile.component';
const routes: Routes = [
  { path: "mobile", component: AppMobileComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppMobileComponent]
})
export class MobilePageModule { }
