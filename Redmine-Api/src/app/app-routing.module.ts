import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';

const routes: Routes = [ {
  path: '' ,
  component: HomeComponent
 } , {
   path : 'home1' ,
   component: Home1Component
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
