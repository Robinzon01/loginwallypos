import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SharedComponent } from './shared/shared.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopageComponent } from './nopage/nopage.component';
import { PageComponent } from './pages/page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SharedComponent,
    DashboardComponent,
    RegisterComponent,
    NopageComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
