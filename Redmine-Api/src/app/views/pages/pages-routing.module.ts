import { RegistryComponent } from './registry/registry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
      {
      path: '' , component: PageComponent,
      children: [
        {
          path: 'login', component: LoginComponent
        },
        {
          path: 'registry', component: RegistryComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
