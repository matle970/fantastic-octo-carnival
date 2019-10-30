import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-index-notice',
  templateUrl: './index-notice.component.html',
  styleUrls: ['./index-notice.component.scss']
})
export class IndexNoticeComponent implements OnInit {

  tabIndex: string = 'all';

  @Input() content: any;

  // mycontent: any = {};


  constructor() { }

  ngOnInit() {
    // this.mycontent = this.content;
  }

  changeTab (tabId: string) {
    this.tabIndex = tabId;
  }

}
