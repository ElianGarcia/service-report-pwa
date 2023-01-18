import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { HomeComponent } from './home/home.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { InputGroupComponent } from './input-group/input-group.component';


@NgModule({
  declarations: [
    TabsComponent,
    HomeComponent,
    InputGroupComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule,
    SharedComponentsModule
  ]
})
export class TabsModule { }
