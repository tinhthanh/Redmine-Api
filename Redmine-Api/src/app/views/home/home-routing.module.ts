
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { patch } from 'webdriver-js-extender';
import { IssuesProjectsComponent } from './issues-projects/issues-projects.component';


const routes: Routes = [{
   path:  'dashboard', component: HomeComponent,
   children: [
      {
        path: 'main', component: DashboardComponent
      }, {
        path: 'projects' , component: ProjectsComponent
      }, {
        path: 'issues-projects', component: IssuesProjectsComponent
      }
   ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
