import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './guards/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ModalComponent } from './services/modal/modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { LoadingInterceptor } from './interceptors/interceptor.interceptor';
import { LoadingService } from './services/loading.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { OnlineStatusModule } from 'ngx-online-status';

import { environment } from 'src/environments/environment';
import { NgxTranslateModule } from './translate/translate.module';

//function is use to get jwt token from local storage
export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedComponentsModule,
    OnlineStatusModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7299"],
        disallowedRoutes: []
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:3000'
    })
  ],
  providers: [
    AuthGuard,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { 
      provide: MAT_DIALOG_DATA, 
      useValue: {} 
    },
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ModalComponent

  ]
})
export class AppModule { }
