import { ProjectService } from './../../_services/manager/project/project.service';
import { ManagerComponent } from './manager.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { MailServerComponent } from './mail-server/mail-server.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { IssuesComponent } from './issues/issues.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectRes } from '../../_helpers/mocktest';

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    HttpClientModule
  ],
  declarations: [MailServerComponent, ProjectListComponent, ManagerComponent, IssuesComponent],
  providers: [ ProjectService,
  ProjectRes]
})
export class ManagerModule { }
