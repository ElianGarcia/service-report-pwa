import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronometerComponent } from './cronometer.component';

const routes: Routes = [
  {
    path: '',
    component: CronometerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronometerRoutingModule { }
