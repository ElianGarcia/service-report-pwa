import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedComponentsRoutingModule { }
