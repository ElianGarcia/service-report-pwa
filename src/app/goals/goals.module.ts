import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    GoalsComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule
  ]
})
export class GoalsModule { }
