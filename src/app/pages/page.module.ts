import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageComponent} from './page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    PageComponent,
    DashboardComponent
  ],
  exports: [
    PageComponent,
    DashboardComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PageModule { }
