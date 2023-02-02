import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ReturnVisitsListComponent } from './return-visits-list/return-visits-list.component';
import { ReturnVisitFormComponent } from './return-visit-form/return-visit-form.component';


@NgModule({
  declarations: [
    StudentsComponent,
    FormComponent,
    CardComponent,
    ReturnVisitsListComponent,
    ReturnVisitFormComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
