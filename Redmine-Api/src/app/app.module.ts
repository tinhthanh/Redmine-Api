import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './views/pages/page-404/page-404.component';
import { DashboardLayoutComponent, PagesLayoutComponent, ManagerLayoutComponent } from './containers';
import { HomeHeaderComponent, HomeFooterComponent } from './components';
// layout web
const APP_CONTAINERS = [
  DashboardLayoutComponent,
  PagesLayoutComponent,
  ManagerLayoutComponent
];
// component container in layout web
const APP_COMPOMENTS = [
  HomeHeaderComponent,
  HomeFooterComponent
];
@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS ,
    ...APP_COMPOMENTS,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
