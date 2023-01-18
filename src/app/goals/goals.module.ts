import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    GoalsComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    SharedComponentsModule
  ]
})
export class GoalsModule { }
