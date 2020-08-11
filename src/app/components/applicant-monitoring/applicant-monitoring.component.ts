import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-monitoring',
  templateUrl: './applicant-monitoring.component.html',
  styleUrls: ['./applicant-monitoring.component.scss']
})
export class ApplicantMonitoringComponent implements OnInit {

  gridData: any = [];
  //panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initializePage();
  }

  initializePage() {
    this.gridData = [
      {'name':'Application','id':'123234345','nameCrop':'Crop','type':'Pink Strawberry','aStatus':'Application Status update','progress':'3','panelOpenState':false},
      {'name':'Application','id':'123234345','nameCrop':'Crop','type':'Pink Strawberry','aStatus':'Application Status update','progress':'3','panelOpenState':false},
      {'name':'Application','id':'123234345','nameCrop':'Crop','type':'Pink Strawberry','aStatus':'Application Status update','progress':'3','panelOpenState':false}
    ]
  }

  togglePanel(index) {
    this.gridData[index].panelOpenState = !this.gridData[index].panelOpenState;
}

}
