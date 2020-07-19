import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateContactPage } from 'src/app/views/main/update-contact/update-contact.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateContactPageRoutingModule {}
