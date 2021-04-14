import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3PageAdmin } from './tab3.page';


import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,    
    RouterModule.forChild([{ path: '', component: Tab3PageAdmin }]),
    Tab3PageRoutingModule,
  ],
  declarations: [Tab3PageAdmin]
})
export class Tab3PageModule {}
