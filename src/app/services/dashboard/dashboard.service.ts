import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base/base.service';
import { CustomerIdService } from '../common-services/customerid.service';
import { MatTableDataSource } from '@angular/material';
import { CompanyListResponse } from 'src/app/objects/dto/firstpage/firstpage-companyList-response';
import { IndexTableElement } from 'src/app/dashboard/service/dashboard-data.service';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';

const orderDef = ["1", "2", "3+", "3", "4+", "4", "4-", "5+", "5", "5-", "6+", "6", "6-", "7+", "7", "8", "9", "W1", "W2", "D", "N", "Z"];

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    _dataList;
    urlList = [{
        'url': this.baseService.geturlservice.URL.FIRSTPAGE_COMPANY_LIST,
        'dtoRequset': CommonRequest,
        'dtoResponse': CompanyListResponse
    }];
    constructor(private baseService: BaseService,
        private customerInfo: CustomerIdService) { }


    sendRquest() {
        this.baseService.httpservice.sendRequestAsync(
            this.urlList[0].url, 
            this.urlList[0].dtoRequset,
            this.urlList[0].dtoResponse).then((data: any) => {
                this.customerInfo.customerId = data.body.aoData[0].id;
                this._dataList = data.body.aoData;
                //console.log('list', this._dataList);
            }, (err) => { })
    };

    get dataList() {
        return this._dataList;
    }
    get dataSource() {
        return new MatTableDataSource<IndexTableElement>(this._dataList)
    }
    get totalDataCount() {
        return this._dataList.length;
    }

    getSortedData(id, order, value) {
        if (order === '0')
            return value;

        switch (id) {
            case 'msr': {
                if (order === '1')
                    return this.sort_MSR_ASC(id, value);
                else
                    return this.sort_MSR_DESC(id, value);
                break;
            }
            default: {
                if (order === '1')
                    return this.sort_COMMON_ASC(id, value);
                else
                    return this.sort_COMMON_DESC(id, value);
                break;
            }
        }
    }
    sort_MSR_ASC(id, value) {
        value.sort((x, y) => {
            if (this.get_MSR_order(x.msr) < this.get_MSR_order(y.msr))
                return -1;
            if (this.get_MSR_order(x.msr) > this.get_MSR_order(y.msr))
                return 1;
            return 0;
        });
        return value;
    }
    sort_MSR_DESC(id, value) {
        value.sort((x, y) => {
            if (this.get_MSR_order(x.msr) > this.get_MSR_order(y.msr)) {
                return -1;
            }
            if (this.get_MSR_order(x.msr) < this.get_MSR_order(y.msr)) {
                return 1;
            }
            return 0;
        });
        return value;
    }
    sort_COMMON_ASC(id, value) {
        value.sort((x, y) => {
            if (x[id] < y[id]) {
                return -1;
            }
            if (x[id] > y[id]) {
                return 1;
            }
            return 0;
        });
        return value;
    }
    sort_COMMON_DESC(id, value) {
        value.sort((x, y) => {
            if (x[id] > y[id]) {
                return -1;
            }
            if (x[id] < y[id]) {
                return 1;
            }
            return 0;
        });
        return value;
    }
    get_MSR_order(value) {
        for (let i in orderDef) {
            if (value === orderDef[i])
                return orderDef.indexOf(value);
        }
        return (100);
    }
    
    setCustomerInfo(value: string) {
        this.customerInfo.customerId = value;
    }
}
