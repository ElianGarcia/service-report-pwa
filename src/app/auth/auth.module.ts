import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordForgotComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedComponentsModule
  ]
})
export class AuthModule { }
