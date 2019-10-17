import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @ViewChild('keyword') keyword: string;
  nowBranch = '經管行';
  nowForword = '授信轉介行';

  branch = ['全部','敦化分行','信義分行','大安分行'];
  branch2 = ['全部','內湖分行','中正分行','淡水分行'];

  @Input() datalist: string;

  myKeyword = '';

  constructor() { }

  ngOnInit() {
    // $('.dropdown-toggle').dropdown();
  }

  chooseBranch (item: any) {
    this.nowBranch = item;
  }
  chooseForword (item: any) {
    this.nowForword = item;
  }
}
