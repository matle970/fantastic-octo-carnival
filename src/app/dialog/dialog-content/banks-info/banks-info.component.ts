import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { NewsBankDetail } from 'src/app/objects/dto/custbanks/custbanks-detail-response';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
@Component({
  selector: 'app-banks-info',
  templateUrl: './banks-info.component.html',
  styleUrls: ['./banks-info.component.scss']
})
export class BanksInfoComponent extends BaseComponent  implements OnInit {
  PreDate: Date;
  LastDate: Date;
  banksInfo: any;

  bankUrl = {
    'url': this.URL.NEWS_BANKS_Profile,
    'dtoRequset': CommonRequest,
    'dtoResponse': NewsBankDetail
  };

  constructor() {
    super();
  }

  ngOnInit() {
    this.sendRquest();
  }

  sendRquest() {
          super.sendRequestAsync(
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
