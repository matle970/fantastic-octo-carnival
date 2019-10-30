import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  openStatus = false;
  constructor() { }

  ngOnInit() {
  }

  openNotice(){
    this.openStatus = true;
  }
}
