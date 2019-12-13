import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { CompanyNews } from 'src/app/objects/dto/custnews/custnews-response';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { NewsService } from 'src/app/services/customer/cust-news/news.service';
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


export class NewsInfoComponent extends BaseComponent implements OnInit, OnChanges {
  @Input() content: any;

  nowNewsId: string;

  newsList: NewsContent[];

  newsUrl = {
    'url': this.URL.NEWS_NEWS_DETAIL,
    'dtoRequset': CommonRequest,
    'dtoResponse': CompanyNews
  };

  nowNews: NewsContent;


  constructor(private newsService: NewsService) {
    super();
  }

  // text
  text = this.newsService.baseService.gettextservice.custnewstext;
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
    super.sendRequestAsync(
      this.newsUrl.url,
      this.newsUrl.dtoRequset,
      this.newsUrl.dtoResponse).then((data: any) => {
        if (data.header.returnCode === '0000') {
          this.newsList = data.body.newsList;
        } else {

        }
        // 預設出現第一筆
        // this.getNownews(this.newsList[0].id);

      }, (err) => {


      });

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
    this.nowNews = this.newsList.find(function (item) {
      return item.id === id;
    });

  }



}
