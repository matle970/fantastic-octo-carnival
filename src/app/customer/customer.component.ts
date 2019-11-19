import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { CustomerInfoService } from '../objects/share-data/customer-info-service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseComponent implements OnInit {

  searchStr: string; // 搜尋的客戶ID字串

  @ViewChild('searchIdBind') searchData: any;

  constructor(customerInfo: CustomerInfoService) { 
    super();
    customerInfo.print(); //get customer id from share data 
  }

  ngOnInit() {
      // tslint:disable-next-line: max-line-length
      // this.searchData.nativeElement.value = this.getShareDataService().customerId === undefined ? '' : this.getShareDataService().customerId; // 將第一筆的customerId 放入input
  }

  getSearchId() {
    this.searchStr = this.searchData.nativeElement.value; // 取得html的元素目前的值
  }
}
