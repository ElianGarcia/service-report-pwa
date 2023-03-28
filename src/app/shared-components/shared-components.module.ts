import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoDataFoundComponent } from './no-data-found/no-data-found.component';
import { AboutComponent } from './about/about.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InputGroupComponent } from './input-group/input-group.component';
import { OfflineComponent } from './offline/offline.component';
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NoDataFoundComponent,
    AboutComponent,
    InputGroupComponent,
    OfflineComponent,
    SettingsComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedComponentsRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NoDataFoundComponent,
    InputGroupComponent,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatCardModule,
    MatDatepickerModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    OfflineComponent
  ]
})
export class SharedComponentsModule { }
