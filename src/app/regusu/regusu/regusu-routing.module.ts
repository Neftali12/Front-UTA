import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegusuPage } from './regusu.page';

const routes: Routes = [
  {
    path: '',
    component: RegusuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegusuPageRoutingModule {}
