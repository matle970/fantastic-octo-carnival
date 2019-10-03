import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-notice',
  templateUrl: './index-notice.component.html',
  styleUrls: ['./index-notice.component.scss']
})
export class IndexNoticeComponent implements OnInit {

  tabIndex: number = 1;


  constructor() { }

  ngOnInit() {
  }

  changeTab (tabId: number){
    this.tabIndex = tabId;
  }

}
