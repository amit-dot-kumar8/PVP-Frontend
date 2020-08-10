import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvpPlatformComponent } from './components/pvp-platform/pvp-platform.component';
import { PvpAdminToolComponent } from './components/pvp-admin-tool/pvp-admin-tool.component';
import { DusExchangePlatformComponent } from './components/dus-exchange-platform/dus-exchange-platform.component';
import { ApplicantMonitoringComponent } from './components/applicant-monitoring/applicant-monitoring.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/PvpPlatform', pathMatch: 'full'},
  { path: 'PvpPlatform', component: PvpPlatformComponent},
  { path: 'PvpAdminTool', component: PvpAdminToolComponent},
  { path: 'DusExchangePlatform', component: DusExchangePlatformComponent},
  { path: 'ApplicantMonitoring', component: ApplicantMonitoringComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
