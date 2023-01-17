import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { CardComponent } from './card/card.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ProgressRoutingModule } from './progress-routing.module';

@NgModule({
  declarations: [
    ProgressComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ProgressRoutingModule
  ]
})
export class ProgressModule { }
