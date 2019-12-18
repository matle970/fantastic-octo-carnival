import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';
import { CommonRequest } from '../../../objects/dto/common/common-request';
import { NewsBankDetail } from '../../../objects/dto/custbanks/custbanks-detail-response';

@Injectable({
    providedIn: 'root'
})
export class CustBankInfoService {

    PreDate: Date;
    LastDate: Date;
    banksInfo: any;

    bankUrl = {
        'url': this.baseService.geturlservice.URL.NEWS_BANKS_Profile,
        'dtoRequset': CommonRequest,
        'dtoResponse': NewsBankDetail
      };

    constructor(
        public baseService: BaseService) {
    }

    sendRquest() {

        this.baseService.httpservice.sendRequestAsync(
            this.bankUrl.url,
            this.bankUrl.dtoRequset,
            this.bankUrl.dtoResponse).then((data: any) => {
                if (data.header.returnCode === '0000') {
                  this.PreDate = data.body.PreDate;
                  this.LastDate = data.body.LastDate;
                  this.banksInfo = data.body.banksInfo;
                } else {
                }
              }, (err) => {
              });
          }
}