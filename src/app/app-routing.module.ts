import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './auth/login/login.component';
import {NopageComponent} from './nopage/nopage.component';
import {RegisterComponent} from './auth/register/register.component';
import {PageComponent} from './pages/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NopageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
