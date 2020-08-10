import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PvpPlatformComponent } from './components/pvp-platform/pvp-platform.component';
import { PvpAdminToolComponent } from './components/pvp-admin-tool/pvp-admin-tool.component';
import { DusExchangePlatformComponent } from './components/dus-exchange-platform/dus-exchange-platform.component';
import { ApplicantMonitoringComponent } from './components/applicant-monitoring/applicant-monitoring.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PvpPlatformComponent,
    PvpAdminToolComponent,
    DusExchangePlatformComponent,
    ApplicantMonitoringComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
