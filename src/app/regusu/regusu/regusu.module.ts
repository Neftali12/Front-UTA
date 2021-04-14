import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegusuPageRoutingModule } from './regusu-routing.module';

import { RegusuPage } from './regusu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegusuPageRoutingModule
  ],
  declarations: [RegusuPage]
})
export class RegusuPageModule {}
