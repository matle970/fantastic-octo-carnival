import { Component, OnInit } from '@angular/core';
import { CustomerHistoryList } from 'src/app/objects/dto/custhistory/custhistory-response';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-cust-history',
  templateUrl: './cust-history.component.html',
  styleUrls: ['./cust-history.component.scss']
})
export class HistoryComponent extends BaseComponent  implements OnInit  {

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
    {
      id: 't05',
      name: '負責人',
    },

  ];

  tabList: Array<any> = [];
  historyList: Array<any> = [];

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

  histUrl = {
    'url': this.URL.JOURNEY_COMPANY_JOURNEY,
    'dtoResponse': CustomerHistoryList
  };

  constructor() {
    super();
  }

  ngOnInit() {
    this.sendRquest();
  }

  sendRquest() {
        super.sendRequestAsync(this.histUrl.url ,this.histUrl.dtoResponse).then((data: any) => {
          // console.log('history data', data);
          if (data.header.returnCode === '0000') {
            this.tabList = data.body.tabList;
            this.historyList = data.body.historyList;
          }
        }, (err) => {


        });
  }

  selectTab (id: string) {
    this.activeTab = id;
  }

}
