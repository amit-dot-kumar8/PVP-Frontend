import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pvp-dropdown',
  templateUrl: './pvp-dropdown.component.html',
  styleUrls: ['./pvp-dropdown.component.scss']
})
export class PvpDropdownComponent implements OnInit {
	@Input() options: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
