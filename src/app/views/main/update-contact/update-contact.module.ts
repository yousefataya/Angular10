import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateContactPageRoutingModule } from 'src/app/views/main/update-contact/update-contact-routing.module';

import { UpdateContactPage } from 'src/app/views/main/update-contact/update-contact.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateContactPageRoutingModule
  ],
  declarations: [UpdateContactPage]
})
export class UpdateContactPageModule {}
