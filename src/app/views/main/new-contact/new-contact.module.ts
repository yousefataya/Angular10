import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewContactPageRoutingModule } from 'src/app/views/main/new-contact/new-contact-routing.module';
import { NewContactPage } from 'src/app/views/main/new-contact/new-contact.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewContactPageRoutingModule
  ],
  declarations: [NewContactPage]
})
export class NewContactPageModule {}
