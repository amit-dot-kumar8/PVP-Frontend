import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-dus-exchange-platform',
  templateUrl: './dus-exchange-platform.component.html',
  styleUrls: ['./dus-exchange-platform.component.scss']
})
export class DusExchangePlatformComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  gridData:any = [];
  dropDownList:any = [];
  selectedOption:any = '';
  openFlyout: boolean = false;
  position = 'right';
  showCloseButton = true;
  showBackdrop = false;
  hideOnBackdropClick = true;
  flyoutDetails: any = {};

  constructor() { }

  ngOnInit(): void {
    this.initializePage();
  }

  initializePage() {
    this.gridData = [
      {'refNo':'XU_23434545656','id':'# 123234345','applicationStatus':'2','submitDate':'05-09-2020','dusExamStatus':'2','dusReportStatus':'-','panelOpenState':false},
      {'refNo':'XU_23434545656','id':'# 123234345','applicationStatus':'2','submitDate':'05-09-2020','dusExamStatus':'2','dusReportStatus':'-','panelOpenState':false},
      {'refNo':'XU_23434545656','id':'# 123234345','applicationStatus':'2','submitDate':'05-09-2020','dusExamStatus':'2','dusReportStatus':'-','panelOpenState':false}  
    ]

    this.dropDownList = [
      {'value':'1', 'viewValue':'Option 1'},
      {'value':'2', 'viewValue':'Option 2'},
      {'value':'3', 'viewValue':'Option 3'},
      {'value':'4', 'viewValue':'Option 4'}
    ]

    this.flyoutDetails = {
     // to be discuss 
    }
  }

  close(reason: string) {
    //this.reason = reason;
    this.sidenav.close();
  }

  togglePanel(index) {
    this.gridData[index].panelOpenState = !this.gridData[index].panelOpenState;
  }

  toggleSidebar() {
    this.openFlyout = !this.openFlyout;
  }

}
