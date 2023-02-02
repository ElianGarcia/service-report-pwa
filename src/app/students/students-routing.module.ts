import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ReturnVisitFormComponent } from './return-visit-form/return-visit-form.component';
import { ReturnVisitsListComponent } from './return-visits-list/return-visits-list.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'form/:id',
    component: FormComponent
  },
  {
    path: 'return-visit-form/:student',
    component: ReturnVisitFormComponent
  },
  {
    path: 'return-visits/history/:id',
    component: ReturnVisitsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
