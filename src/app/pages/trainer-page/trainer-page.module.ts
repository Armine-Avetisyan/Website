import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerPageRoutingModule } from './trainer-page-routing.module';
import {TrainerPageComponent} from "./trainer-page.component";


@NgModule({
  declarations: [
    TrainerPageComponent
  ],
  imports: [
    CommonModule,
    TrainerPageRoutingModule
  ],
  exports: [TrainerPageComponent]
})
export class TrainerPageModule { }
