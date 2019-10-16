import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  displayedColumns = ['date', 'title'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}


export interface PeriodicElement {
  date: string;
  title: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '06/18', title: '台積電揮別谷底開盤價歷史'},
  {date: '06/18', title: '台積電法說會後外資調高'},
  {date: '06/18', title: '張忠謀領導心法相信台積電'},
  {date: '06/18', title: '台積電揮別谷底開盤價歷史'},
  {date: '06/18', title: '台積電法說會後外資調高'},
  {date: '06/18', title: '張忠謀領導心法相信台積電'},
  {date: '06/18', title: '台積電揮別谷底開盤價歷史'},
  {date: '06/18', title: '台積電法說會後外資調高'},
  {date: '06/18', title: '張忠謀領導心法相信台積電'},
  {date: '06/18', title: '台積電法說會後外資調高'},
];
