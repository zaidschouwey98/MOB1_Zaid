import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidatestockPageRoutingModule } from './validatestock-routing.module';

import { ValidatestockPage } from './validatestock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidatestockPageRoutingModule
  ],
  declarations: [ValidatestockPage]
})
export class ValidatestockPageModule {}
