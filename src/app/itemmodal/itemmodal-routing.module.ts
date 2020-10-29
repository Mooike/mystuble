import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemmodalPage } from './itemmodal.page';

const routes: Routes = [
  {
    path: '',
    component: ItemmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemmodalPageRoutingModule {}
