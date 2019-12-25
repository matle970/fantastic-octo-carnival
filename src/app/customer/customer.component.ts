import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerIdService } from '../services/common-services/customerid.service';
import { DateUtilService } from '../services/date-util.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

    searchStr: string; // 搜尋的客戶ID字串
    yesterdayDate: string;
    @ViewChild('searchIdBind') searchData: any;

    constructor(private customerInfo: CustomerIdService, private dateUtilService: DateUtilService) {
        customerInfo.print(); //get customer id from share data 
    }

    ngOnInit() {
        this.yesterdayDate = this.dateUtilService.yesterdayDate;
    }

    getSearchId() {
        this.customerInfo.customerId = this.searchStr;
        this.searchStr = this.searchData.nativeElement.value; // 取得html的元素目前的值
    }
}
