import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2PageAdmin } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2PageAdmin,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
