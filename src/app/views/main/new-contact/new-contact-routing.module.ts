import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewContactPage } from 'src/app/views/main/new-contact/new-contact.page';

const routes: Routes = [
  {
    path: 'contacts',
    component: NewContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewContactPageRoutingModule {}
