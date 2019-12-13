import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { NewsBankDetail } from 'src/app/objects/dto/custbanks/custbanks-detail-response';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { NewsService } from 'src/app/services/customer/cust-news/news.service';
@Component({
  selector: 'app-banks-info',
  templateUrl: './banks-info.component.html',
  styleUrls: ['./banks-info.component.scss']
})
export class BanksInfoComponent extends BaseComponent implements OnInit {
  PreDate: Date;
  LastDate: Date;
  banksInfo: any;

  bankUrl = {
    'url': this.URL.NEWS_BANKS_Profile,
    'dtoRequset': CommonRequest,
    'dtoResponse': NewsBankDetail
  };

  constructor(private newsService: NewsService) {
    super();
  }
  // text
  text = this.newsService.baseService.gettextservice.custnewstext;
  bankinfo_Title = this.text.cust_news.bankinfo_Title;
  current_Period = this.text.bank_info.current_Period;
  last_Period = this.text.bank_info.last_Period;
  valChanged = this.text.bank_info.valChanged;
  bank = this.text.bank_info.bank;
  quota = this.text.bank_info.quota;
  balance = this.text.bank_info.balance;
  collateral = this.text.bank_info.collateral;

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
