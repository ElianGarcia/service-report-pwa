import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ProgressComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProgressModule { }
