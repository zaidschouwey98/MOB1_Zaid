import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidatestockPage } from './validatestock.page';

const routes: Routes = [
  {
    path: '',
    component: ValidatestockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidatestockPageRoutingModule {}
