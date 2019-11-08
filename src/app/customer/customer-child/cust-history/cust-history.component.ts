import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cust-history',
  templateUrl: './cust-history.component.html',
  styleUrls: ['./cust-history.component.scss']
})
export class HistoryComponent implements OnInit {

  activeTab: any = 'all';
  tablist = [
    {
      id: 'all',
      name: '全部',
    },
    {
      id: 't02',
      name: '存款',
    },
    {
      id: 't03',
      name: '放款',
    },
    // { // maintis 2005: user 說目前沒有 tmu 先隱藏  20191104
    //   id: 't04',
    //   name: 'TMU',
    // },
    {
      id: 't05',
      name: '負責人',
    },

  ];

  contentList = [
    {
      id: 'c001',
      type: 't03',
      type_name: '放款',
      date_time: '2019/04/26',
      unit: 'Myb2b',
      content_word: '企金授信_還款_工商貸款'
    },
    {
      id: 'c005',
      type: 't03',
      type_name: '放款',
      date_time: '2019/03/21',
      unit: '系統作業',
      content_word:  '外幣授信_撥款_購置不動產'
    },
    {
      id: 'c010',
      type: 't02',
      type_name: '存款',
      date_time: '2019/02/21',
      unit: 'Myb2b',
      content_word: '台幣存匯轉帳自行轉帳'
    },
    {
      id: 'c002',
      type: 't02',
      type_name: '存款',
      date_time: '2019/04/25',
      unit: 'ATM',
      content_word: '台幣存匯_轉帳_自行轉帳'
    },
    {
      id: 'c003',
      type: 't02',
      type_name: '存款',
      date_time: '2019/04/21',
      unit: '樹林分行',
      content_word: '台整存匯提款自行提款'
    },
    {
      id: 'c004',
      type: 't05',
      type_name: '負責人',
      date_time: '2019/04/21',
      unit: 'mybank',
      content_word:  '轉帳繳信用卡'
    },

    {
      id: 'c006',
      type: 't05',
      type_name: '負責人',
      date_time: '2019/03/21',
      unit: 'mybank',
      content_word: '轉帳繳他人信用卡款'
    },
    {
      id: 'c007',
      type: 't05',
      type_name: '負責人',
      date_time: '2019/04/21',
      unit: 'mybank',
      content_word: '個金授信_還款小額信貸'
    },
    {
      id: 'c008',
      type: 't05',
      type_name: '負責人',
      date_time: '2019/05/21',
      unit: '網銀',
      content_word: '個金授信_還款_房屋貸款'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectTab (id) {
    this.activeTab = id;
  }

}
