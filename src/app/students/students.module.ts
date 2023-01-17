import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    StudentsComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
