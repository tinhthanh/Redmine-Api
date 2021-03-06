import { IssuesComponent } from './issues/issues.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { MailServerComponent } from './mail-server/mail-server.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
          {
          path: '', component: ManagerComponent,
          children: [
            {
              path: 'mail-server',
              component: MailServerComponent
            },
            {
              path: 'project-list',
              component: ProjectListComponent
            },
            {
              path: 'issues',
              component: IssuesComponent
            },
          ]
        }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
