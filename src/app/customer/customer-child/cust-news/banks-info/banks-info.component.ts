import { Component, OnInit } from '@angular/core';
import { CustBankInfoService } from '../../../../services/customer/cust-news/cust-bank-info.service';

@Component({
  selector: 'app-banks-info',
  templateUrl: './banks-info.component.html',
  styleUrls: ['./banks-info.component.scss']
})
export class BanksInfoComponent implements OnInit {
  PreDate: Date;
  LastDate: Date;
  banksInfo: any;

  constructor(private custBankInfoService: CustBankInfoService) {
  }

  // text
  text = this.custBankInfoService.baseService.gettextservice.custnewstext;
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


  async sendRquest() {
    await this.custBankInfoService.sendRquest();
    this.PreDate = this.custBankInfoService.PreDate;
    this.LastDate = this.custBankInfoService.LastDate;
    this.banksInfo = this.custBankInfoService.banksInfo;
  }

}
