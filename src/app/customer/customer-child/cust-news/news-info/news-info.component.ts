import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { CustNewsInfoService } from '../../../../services/customer/cust-news/cust-news-info.service';

declare interface NewsContent {
  id: string;
  paper: string;
  date: string;
  title: string;
  tag: string;
  content: string;
}

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.scss']
})


export class NewsInfoComponent implements OnInit, OnChanges {
  @Input() content: any;

  nowNewsId: string;
  newsList: NewsContent[];
  nowNews: NewsContent;

  constructor(private custNewsInfoService: CustNewsInfoService) {

  }

  // text
  text = this.custNewsInfoService.baseService.gettextservice.custnewstext;
  public_Opinion_Analysis = this.text.news_info.public_Opinion_Analysis;

  ngOnInit() {
    this.sendRquest();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('change', changes.content.currentValue);
    const nthis = this;
    if (changes.content.currentValue.item_id) {
      setTimeout(function () {
        nthis.getContent();
      }, 100);
    }
  }

  sendRquest() {
    this.custNewsInfoService.sendRquest();
  }

  getContent() {
    const item = this.content.item_id;
    this.getNownews(item);
  }

  selectNews(id: string) {
    this.nowNewsId = id;
    this.getNownews(id);
  }

  getNownews(id: string) {
    this.nowNewsId = id;
    this.nowNews = this.custNewsInfoService.newsList.find(
      item => item.id === id
    );
    this.newsList = this.custNewsInfoService.newsList;
  }

}
