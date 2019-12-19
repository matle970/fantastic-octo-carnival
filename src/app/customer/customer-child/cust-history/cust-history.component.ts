import { Component, OnInit } from '@angular/core';
import { CustHistoryService } from '../../../services/customer/cust-history/cust-history.service';


@Component({
  selector: 'app-cust-history',
  templateUrl: './cust-history.component.html',
  styleUrls: ['./cust-history.component.scss']
})
export class HistoryComponent implements OnInit  {

  activeTab: any = 'all';
  tabList: Array<any> = [];
  historyList: Array<any> = [];



    // text
    text = this.custHistoryService.baseService.gettextservice.custhistorytext;
    cust_history = this.text.cust_history;
    // 暫定不知道判斷要寫在哪，先放在這
    // identity = ['AML', '黑名單', '低度行銷'];
    identity = this.text.identity;

  constructor(private custHistoryService: CustHistoryService) {
  }

  ngOnInit() {
    this.sendRquest();
  }

  async sendRquest() {
  await this.custHistoryService.sendRquest();
  this.tabList = this.custHistoryService.tabList;
  this.historyList = this.custHistoryService.historyList;
  }

  selectTab (id: string) {
    this.activeTab = id;
  }

}
