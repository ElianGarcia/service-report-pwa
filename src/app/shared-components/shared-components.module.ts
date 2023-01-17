import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedComponentsRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedComponentsModule { }
