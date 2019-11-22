import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { CompanyNews } from 'src/app/objects/dto/custnews/custnews-response';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
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


export class NewsInfoComponent extends BaseComponent  implements OnInit {

  nowNewsId: string;

  newsList: NewsContent[];

  newsUrl = {
    'url': this.URL.NEWS_NEWS_DETAIL,
    'dtoRequset': CommonRequest,
    'dtoResponse': CompanyNews
  };

  nowNews: NewsContent;


  constructor() {
    super();
  }

  ngOnInit() {
    this.sendRquest();
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
          this.getNownews(this.newsList[0].id);

    }, (err) => {


    });

  }



  selectNews (id: string) {
    this.nowNewsId = id;
    this.getNownews(id);
  }

  getNownews (id: string) {
    this.nowNewsId = id;
    this.nowNews = this.newsList.find(function(item) {
      return item.id === id;
    });

  }



}
