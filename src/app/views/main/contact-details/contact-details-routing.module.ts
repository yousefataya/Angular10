import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailsPage } from 'src/app/views/main/contact-details/contact-details.page';

const routes: Routes = [
  {
    path: '',
    component: ContactDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactDetailsPageRoutingModule {}
