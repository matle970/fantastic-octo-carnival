import { Component, OnInit } from '@angular/core';

export interface aoList {
  id: string;
  role: string;
  dev: string;
  wid: string;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-manage-info',
  templateUrl: './manage-info.component.html',
  styleUrls: ['./manage-info.component.scss']
})
export class ManageInfoComponent implements OnInit {
  manageColumn = ['role', 'dev', 'wid', 'name', 'phone'];
  management: aoList[] = [
    {
      id: 'a001',
      role: 'PS',
      dev: '環服部',
      wid: 'NT48691',
      name: '劉子齊',
      phone: '02-12345678 #1234'
    },
    {
      id: 'a002',
      role: 'TMO',
      dev: '金行部',
      wid: 'NT83333',
      name: '毛芝瑩',
      phone: '02-12345678 #1234'
    },
    {
      id: 'a003',
      role: '公司戶分行理專',
      dev: '信義分行',
      wid: 'NT81757',
      name: '林祐辰',
      phone: '02-12345678 #1234'
    },
    {
      id: 'a004',
      role: '負責人分行理專',
      dev: '信義分行',
      wid: 'NT81757',
      name: '林祐辰',
      phone: '02-12345678 #1234'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
