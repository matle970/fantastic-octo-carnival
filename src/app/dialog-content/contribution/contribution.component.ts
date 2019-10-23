import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';


export interface controEle {
  id: string;
  now: string;
  load: string;
  trade: string;
  cus: string;
  tmu: string;
  other: string;
}

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss']
})
export class ContributionComponent implements OnInit {
  manageColumn = ['now', 'load', 'trade', 'cus', 'tmu', 'other'];
  controList: controEle[] = [
    {
      id: 'a001',
      now: 'PS',
      load: '環服部',
      trade: 'NT48691',
      cus: '劉子齊',
      tmu: '02-12345678 #1234',
      other: 'xxx'
    },
    {
      id: 'a002',
      now: 'TMO',
      load: '金行部',
      trade: 'NT83333',
      cus: '毛芝瑩',
      tmu: '02-12345678 #1234',
      other: 'xxx'
    },
    {
      id: 'a003',
      now: '公司戶分行理專',
      load: '信義分行',
      trade: 'NT81757',
      cus: '林祐辰',
      tmu: '02-12345678 #1234',
      other: 'xxx'
    },
    {
      id: 'a004',
      now: '負責人分行理專',
      load: '信義分行',
      trade: 'NT81757',
      cus: '林祐辰',
      tmu: '02-12345678 #1234',
      other: 'xxx'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
