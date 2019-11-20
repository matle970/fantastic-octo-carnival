import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { CompanyList } from '../objects/dto/firstpage/firstpage-companyList-response';
import { CustomerInfoService } from './customerid.service';
import { IndexTableElement } from '../dashboard/service/dashboard-data.service';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    dataList;
    urlList = [{
        'url': this.baseService.URL.FIRSTPAGE_COMPANY_LIST,
        'dtoResponse': CompanyList
    }];
    constructor(private baseService: BaseService,
                private customerInfo: CustomerInfoService) { }

  
    sendRquest() {
        this.baseService.sendRequestAsync(this.urlList[0].url, this.urlList[0].dtoResponse).then((data: any) => {
            this.customerInfo.customerId = data.body.aoData[0].id;
            this. dataList = data.body.aoData;
        }, (err) => { })
    };

    get dataSource() {
        return new MatTableDataSource<IndexTableElement>(this.dataList)
    }

    get totalDataCount() {
        return this.dataList.length;
    }

    get columns() {
      return this.dataList.slice;
    }
}
