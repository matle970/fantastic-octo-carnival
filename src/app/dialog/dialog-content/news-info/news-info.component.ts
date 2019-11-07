import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.scss']
})
export class NewsInfoComponent implements OnInit {

  nowNewsId = '001';

  newsList = [
    {
      id: '001',
      paper: '經濟日報',
      date: '2019/06/18',
      title: '台積電揮別谷底開盤股價飆歷史新高'
    },
    {
      id: '002',
      paper: '經濟日報',
      date: '2019/06/18',
      title: '台積電揮別谷底開盤股價飆歷史新高'
    },
    {
      id: '003',
      paper: '經濟日報',
      date: '2019/06/18',
      title: '台積電揮別谷底開盤股價飆歷史新高'
    },
    {
      id: '004',
      paper: '經濟日報',
      date: '2019/06/18',
      title: '台積電揮別谷底開盤股價飆歷史新高'
    },
    {
      id: '005',
      paper: '經濟日報',
      date: '2019/06/18',
      title: '台積電揮別谷底開盤股價飆歷史新高'
    },
    {
      id: '006',
      paper: '經濟日報',
      date: '2019/06/18',
      title: '台積電揮別谷底開盤股價飆歷史新高'
    },

  ];


  constructor() { }

  ngOnInit() {
  }

  selectNews (id: string) {
    this.nowNewsId = id;
  }

}
