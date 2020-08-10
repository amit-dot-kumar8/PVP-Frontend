import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pvp-platform',
  templateUrl: './pvp-platform.component.html',
  styleUrls: ['./pvp-platform.component.scss']
})
export class PvpPlatformComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAdminTool()
  {
    this.router.navigate(['PvpAdminTool']);
  }

  navigateToApplicantMoniter()
  {
    this.router.navigate(['ApplicantMonitoring']);
  }

  navigateToDusExchange()
  {
    this.router.navigate(['DusExchangePlatform']);
  }

}
