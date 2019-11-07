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
    {
      id: 't04',
      name: 'TMU',
    },
    {
      id: 't05',
      name: '負責人',
    },

  ];

  contentList = [
    {
      id: 'c001',
      type: 't02',
      type_name: '存款',
      date_time: '2019/04/26',
      unit: '淡水分行',
      content_word: '存款1000元存款存款存款存款存款存款存款存款'
    },
    {
      id: 'c005',
      type: 't02',
      type_name: '存款',
      date_time: '2019/03/21',
      unit: '中山分行',
      content_word:  '存款1000元存款存款存款存款存款存款存款存款'
    },
    {
      id: 'c010',
      type: 't04',
      type_name: 'TMU',
      date_time: '2019/02/21',
      unit: '大直分行',
      content_word: '住造小因來單當一那知灣生條；的成元受臺主利鄉心出量為笑，機大我上'
    },
    {
      id: 'c002',
      type: 't02',
      type_name: '存款',
      date_time: '2019/04/25',
      unit: '信義分行',
      content_word: '存款1000元存款存款存款存款存款存款存款存款'
    },
    {
      id: 'c003',
      type: 't02',
      type_name: '存款',
      date_time: '2019/04/21',
      unit: '松山分行',
      content_word: '存款1000元存款存款存款存款存款存款存款存款'
    },
    {
      id: 'c004',
      type: 't02',
      type_name: '存款',
      date_time: '2019/04/21',
      unit: '大安分行',
      content_word:  '存款1000元存款存款存款存款存款存款存款存款'
    },

    {
      id: 'c006',
      type: 't03',
      type_name: '放款',
      date_time: '2019/03/21',
      unit: '中山分行',
      content_word: '放款放款放款放款放款放款放款放款放款放款放款放款'
    },
    {
      id: 'c007',
      type: 't03',
      type_name: '放款',
      date_time: '2019/04/21',
      unit: '大安分行',
      content_word: '放款放款放款放款放款放款放款放款放款放款放款放款'
    },
    {
      id: 'c008',
      type: 't03',
      type_name: '放款',
      date_time: '2019/05/21',
      unit: '內湖分行',
      content_word: '電解她無事！著沒營氣好勢計。人情最！'
    },

    {
      id: 'c009',
      type: 't04',
      type_name: 'TMU',
      date_time: '2019/01/21',
      unit: '內湖分行',
      content_word: '住造小因來單當一那知灣生條；的成元受臺主利鄉心出量為笑，機大我上'
    },

    {
      id: 'c011',
      type: 't04',
      type_name: 'TMU',
      date_time: '2019/03/21',
      unit: '大直分行',
      content_word: '住造小因來單當一那知灣生條；的成元受臺主利鄉心出量為笑，機大我上'
    },
    {
      id: 'c012',
      type: 't05',
      type_name: '負責人',
      date_time: '2019/03/21',
      unit: '大安分行',
      content_word: '負責人負責人負責人負責人負責人負責人負責人負責人負責人負責人'
    },
    {
      id: 'c013',
      type: 't05',
      type_name: '負責人',
      date_time: '2019/04/21',
      unit: '大安分行',
      content_word: '上童不不解畫以進其音我。山有東、會考。'
    },

    {
      id: 'c014',
      type: 't05',
      type_name: '負責人',
      date_time: '2019/04/20',
      unit: '信義分行',
      content_word: '上童不不解畫以進其音我。山有東、會考。'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  selectTab (id) {
    this.activeTab = id;
  }

}
