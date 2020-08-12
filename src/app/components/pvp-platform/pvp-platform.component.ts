import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pvp-platform',
  templateUrl: './pvp-platform.component.html',
  styleUrls: ['./pvp-platform.component.scss']
})
export class PvpPlatformComponent implements OnInit {
  gridData: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initializePage();
  }

  navigateToAdminTool()
  {
    this.router.navigate(['pvp-admin-tool']);
  }

  navigateToApplicantMoniter()
  {
    this.router.navigate(['applicant-monitoring']);
  }

  navigateToDusExchange()
  {
    this.router.navigate(['dus-exchange-platform']);
  }

  initializePage() {
    this.gridData = [
      {name: 'Application', id: '123234345', nameCrop: 'Crop', type: 'Pink Strawberry',
      aStatus: 'Application Status update', progress: '3', panelOpenState: false},
      {name: 'Application', id: '123234345', nameCrop: 'Crop', type: 'Pink Strawberry',
      aStatus: 'Application Status update', progress: '3', panelOpenState: false},
      {name: 'Application', id: '123234345', nameCrop: 'Crop', type: 'Pink Strawberry',
      aStatus: 'Application Status update', progress: '3', panelOpenState: false}
    ];
  }

  togglePanel(index) {
    this.gridData[index].panelOpenState = !this.gridData[index].panelOpenState;
}

}
