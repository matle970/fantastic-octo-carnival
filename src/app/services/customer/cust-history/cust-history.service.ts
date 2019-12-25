import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';
import { CustomerHistoryList } from '../../../objects/dto/custhistory/custhistory-response';
import { CommonRequest } from '../../../objects/dto/common/common-request';

@Injectable({
    providedIn: 'root'
})
export class CustHistoryService {
    // tabList: Array<any> = [];
    historyList: Array<any> = [];

    histUrl = {
        'url': this.baseService.geturlservice.URL.JOURNEY_COMPANY_JOURNEY,
        'dtoRequset': CommonRequest,
        'dtoResponse': CustomerHistoryList
      };
    constructor(public baseService: BaseService) {
     }

     sendRquest() {

        this.baseService.httpservice.sendRequestAsync(
            this.histUrl.url,
            this.histUrl.dtoRequset,
            this.histUrl.dtoResponse).then((data: any) => {
            // console.log('history data', data);
            if (data.header.returnCode === '0000') {
              // this.tabList = data.body.tabList;
              this.historyList = data.body.journey;
            }
          }, (err) => {
          });
    }

}
