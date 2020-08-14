import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PvpPlatformComponent } from './components/pvp-platform/pvp-platform.component';
import { PvpAdminToolComponent } from './components/pvp-admin-tool/pvp-admin-tool.component';
import { DusExchangePlatformComponent } from './components/dus-exchange-platform/dus-exchange-platform.component';
import { ApplicantMonitoringComponent } from './components/applicant-monitoring/applicant-monitoring.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppHeaderComponent } from './components/app-header/app-header.component';
import { PvpHeaderComponent } from './components/pvp-header/pvp-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    PvpPlatformComponent,
    PvpAdminToolComponent,
    DusExchangePlatformComponent,
    ApplicantMonitoringComponent,
    PageNotFoundComponent,
    // AppHeaderComponent,
    PvpHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
