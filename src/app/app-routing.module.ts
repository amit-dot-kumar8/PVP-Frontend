import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvpPlatformComponent } from './components/pvp-platform/pvp-platform.component';
import { PvpAdminToolComponent } from './components/pvp-admin-tool/pvp-admin-tool.component';
import { DusExchangePlatformComponent } from './components/dus-exchange-platform/dus-exchange-platform.component';
import { ApplicantMonitoringComponent } from './components/applicant-monitoring/applicant-monitoring.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/pvp-platform', pathMatch: 'full'},
  { path: 'pvp-platform', component: PvpPlatformComponent},
  { path: 'pvp-admin-tool', component: PvpAdminToolComponent},
  { path: 'dus-exchange-platform', component: DusExchangePlatformComponent},
  { path: 'applicant-monitoring', component: ApplicantMonitoringComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
