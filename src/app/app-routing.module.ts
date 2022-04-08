import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NopageComponent} from './nopage/nopage.component';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {PageRoutingModule} from './pages/page-routing.module';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: NopageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PageRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
