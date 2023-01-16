import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    TabsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
