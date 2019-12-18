import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';
import { CompanyNews } from '../../../objects/dto/custnews/custnews-response';
import { CommonRequest } from '../../../objects/dto/common/common-request';

declare interface NewsContent {
    id: string;
    paper: string;
    date: string;
    title: string;
    tag: string;
    content: string;
}

@Injectable({
    providedIn: 'root'
})
export class CustNewsInfoService {

    newsList: NewsContent[];
    nowNewsId: string;
    nowNews: NewsContent;

    newsUrl = {
        'url': this.baseService.geturlservice.URL.NEWS_NEWS_DETAIL,
        'dtoRequset': CommonRequest,
        'dtoResponse': CompanyNews
    };


    constructor(
        public baseService: BaseService) {
    }

    sendRquest() {

        this.baseService.httpservice.sendRequestAsync(
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
}