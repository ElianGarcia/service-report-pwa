import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    StudentsComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
