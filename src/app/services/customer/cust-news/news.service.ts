import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';
import { CompanyNews } from '../../../objects/dto/custnews/custnews-response';
import { NewsBanklist } from '../../../objects/dto/custbanks/custbanks-response';
import { CommonRequest } from '../../../objects/dto/common/common-request';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  _newsSources: any;
  _banksSources: any;
  _PreDate: any;
  _LastDate: any;

  urlList = [
    {
      'url': this.baseService.geturlservice.URL.NEWS_NEWS_DETAIL,
      'dtoRequset': CommonRequest,
      'dtoResponse': CompanyNews
    },
    {
      'url': this.baseService.geturlservice.URL.NEWS_BANKS,
      'dtoRequset': CommonRequest,
      'dtoResponse': NewsBanklist
    }
  ];


  constructor(
    public baseService: BaseService) {
  }

  sendRquest() {
    for (let i = 0; i < this.urlList.length; i++) {
      this.baseService.httpservice.sendRequestAsync(
        this.urlList[i].url,
        this.urlList[i].dtoRequset,
        this.urlList[i].dtoResponse).then((data: any) => {
          if (data.header.returnCode === '0000' && i === 0) {
            this._newsSources = data.body.newsList;
          } else if (data.header.returnCode === '0000' && i === 1) {
            this._PreDate = data.body.PreDate;
            this._LastDate = data.body.LastDate;
            this._banksSources = data.body.banksList;
          }
        }, (err) => { });
    }
  }

  get newsSources() {
    return this._newsSources;
  }

  get banksSources() {
    return this._banksSources;
  }

  get PreDate() {
    return new Date(this._PreDate * 1000);
  }

  get LastDate() {
    return new Date(this._LastDate * 1000);
  }


}
