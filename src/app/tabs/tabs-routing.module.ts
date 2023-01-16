import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent
  },
  {
    path: 'students',
    loadChildren: () => import('../students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('../goals/goals.module').then(m => m.GoalsModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('../progress/progress.module').then(m => m.ProgressModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
