import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PvpPlatformComponent } from './components/pvp-platform/pvp-platform.component';
import { PvpAdminToolComponent } from './components/pvp-admin-tool/pvp-admin-tool.component';
import { DusExchangePlatformComponent } from './components/dus-exchange-platform/dus-exchange-platform.component';
import { ApplicantMonitoringComponent } from './components/applicant-monitoring/applicant-monitoring.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PvpHeaderComponent } from './components/pvp-header/pvp-header.component';
import {PvpPlatformHeaderComponent} from './components/pvp-platform-header/pvp-platform-header.component';
import { ApplicantHeaderComponent } from './components/applicant-header/applicant-header.component';
import { DusexchangeHeaderComponent } from './components/dusexchange-header/dusexchange-header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PvpPlatformComponent,
    PvpAdminToolComponent,
    DusExchangePlatformComponent,
    ApplicantMonitoringComponent,
    PageNotFoundComponent,
    PvpHeaderComponent,
    DusexchangeHeaderComponent,
    ApplicantHeaderComponent,
    ProgressBarComponent,
    PvpPlatformHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
