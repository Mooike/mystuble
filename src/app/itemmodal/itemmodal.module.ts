import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemmodalPageRoutingModule } from './itemmodal-routing.module';

import { ItemmodalPage } from './itemmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemmodalPageRoutingModule
  ],
  declarations: [ItemmodalPage]
})
export class ItemmodalPageModule {}
