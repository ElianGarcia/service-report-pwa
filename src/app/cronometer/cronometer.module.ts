import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronometerRoutingModule } from './cronometer-routing.module';
import { CronometerComponent } from './cronometer.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    CronometerComponent
  ],
  imports: [
    CommonModule,
    CronometerRoutingModule,
    SharedComponentsModule
  ]
})
export class CronometerModule { }
