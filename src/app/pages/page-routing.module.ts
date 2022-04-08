import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from './page.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PageComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule { }
