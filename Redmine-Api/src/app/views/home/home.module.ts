import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { IssuesProjectsComponent } from './issues-projects/issues-projects.component';
import { SearchEngineComponent,
         SearchIssuesComponent,
         ListsProjectComponent,
         SearchEngineChildComponent } from './projects/components';
import {SelectModule} from 'ng2-select';
const APP_COMPONENTS = [
   SearchEngineComponent,
   SearchIssuesComponent,
   SearchEngineChildComponent,
   ListsProjectComponent
  ];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SelectModule
  ],
  declarations: [ DashboardComponent, HomeComponent, ProjectsComponent , IssuesProjectsComponent, LoginComponent,
  ReportComponent , ViewTaskComponent, ...APP_COMPONENTS, SearchIssuesComponent]
})
export class HomeModule { }
