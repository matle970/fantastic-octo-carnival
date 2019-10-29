import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';


export interface controEle {
  id: string;
  text: string;
  period: string;
  now: string;
  load: string;
  trade: string;
  cus: string;
  tmu: string;
  other: string;
  all: string;
}

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss']
})
export class ContributionComponent implements OnInit {
  manageColumn = ['id', 'now', 'load', 'trade', 'cus', 'tmu', 'other', 'all'];

  controList: controEle[] = [
    {
      id: 'a001',
      text: '去年度累計貢獻度',
      period: '2017/12 - 2018/05',
      now: '1000',
      load: '1000',
      trade: '500',
      cus: '500',
      tmu: '1000',
      other: '1000',
      all: '6000',
    },
    {
      id: 'a002',
      text: '今年度累計貢獻度',
      period: '2018/12 - 2019/05',
      now: '1000',
      load: '1000',
      trade: '500',
      cus: '500',
      tmu: '1000',
      other: '1000',
      all: '6500'
    },


  ];
  constructor() { }

  ngOnInit() {
  }

}
