import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dus-exchange-platform',
  templateUrl: './dus-exchange-platform.component.html',
  styleUrls: ['./dus-exchange-platform.component.scss']
})
export class DusExchangePlatformComponent implements OnInit {

  gridData:any = [];
  dropDownList:any = [];
  selectedOption:any = '';

  constructor() { }

  ngOnInit(): void {
    this.initializePage();
  }

  initializePage() {
    this.gridData = [
      {'name':'Application','id':'# 123234345','nameCrop':'Crop','type':'Pink Strawberry','aStatus':'Application Status update','progress':'3','panelOpenState':false},
      {'name':'Application','id':'# 123234345','nameCrop':'Crop','type':'Pink Strawberry','aStatus':'Application Status update','progress':'3','panelOpenState':false},
      {'name':'Application','id':'# 123234345','nameCrop':'Crop','type':'Pink Strawberry','aStatus':'Application Status update','progress':'3','panelOpenState':false}
    ]

    this.dropDownList = [
      {'value':'1', 'viewValue':'Option 1'},
      {'value':'2', 'viewValue':'Option 2'},
      {'value':'3', 'viewValue':'Option 3'},
      {'value':'4', 'viewValue':'Option 4'}
    ]
  }

}
