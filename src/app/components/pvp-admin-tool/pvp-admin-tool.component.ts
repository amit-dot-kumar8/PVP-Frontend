import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pvp-admin-tool',
  templateUrl: './pvp-admin-tool.component.html',
  styleUrls: ['./pvp-admin-tool.component.scss']
})
export class PvpAdminToolComponent implements OnInit {
  gridData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.initializePage();
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
