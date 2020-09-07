import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pvp-platform',
  templateUrl: './pvp-platform.component.html'
})
export class PvpPlatformComponent implements OnInit {
  gridData: any = [];
  viewGridMode: boolean = true;
  viewDetailMode: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initializePage();
  }


  initializePage() {
    this.gridData = [
      {name: 'Application', id: '123234345', nameCrop: '-', type: 'Pink Strawberry',
      aStatus: 'Application Status update', progress: 'paid', panelOpenState: false},
      {name: 'Application', id: '123234345', nameCrop: '-', type: 'Pink Strawberry',
      aStatus: 'Application Status update', progress: 'paid', panelOpenState: false},
      {name: 'Application', id: '123234345', nameCrop: '-', type: 'Pink Strawberry',
      aStatus: 'Application Status update', progress: 'paid', panelOpenState: false}
    ];
  }

  togglePanel(index) {
    this.gridData[index].panelOpenState = !this.gridData[index].panelOpenState;
}

toggleViewGridMode () {
  this.viewGridMode = true;
  this.viewDetailMode = false;
}

toggleViewDetailMode () {
  this.viewGridMode = false;
  this.viewDetailMode = true;
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

}
