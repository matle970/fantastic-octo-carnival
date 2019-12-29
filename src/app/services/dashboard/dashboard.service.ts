import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base/base.service';
import { CustomerIdService } from '../common-services/customerid.service';
import { MatTableDataSource } from '@angular/material';
import { CompanyListResponse } from 'src/app/objects/dto/firstpage/firstpage-companyList-response';
import { IndexTableElement } from 'src/app/dashboard/model/dashboardModel';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { Http } from '@angular/http';
import { CompanyListRequest } from 'src/app/objects/dto/firstpage/firstpage-companyList-request';
import { AoIdentityService } from '../common-services/ao-identity.service';
import { TrustkeyServeice } from '../common-services/trustkey.service';
import { HttpClient } from '@angular/common/http';

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
        private customerInfo: CustomerIdService,
        private http: HttpClient,
        private aoIdentityService: AoIdentityService,
        private trustKeyService: TrustkeyServeice) { }

    /*
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
    */
    async sendRquest(): Promise<CompanyListResponse> {
        // set param in http.service.ts
        // let param = new CompanyListRequest;
        // //TODO HEADER
        // param.body.bossId = this.aoIdentityService.loginId;
        // param.body.trustKey = this.trustKeyService.Trustkey;

        let result = await this.baseService.httpservice.sendRequestAsync(
            this.urlList[0].url,
            this.urlList[0].dtoRequset,
            this.urlList[0].dtoResponse);
        if (result.body.records.length !== 0)
            this.customerInfo.customerId = result.body.records[0].customerId;

        //this._dataList = result.body.aoData;
        return result;

        /*
                let param = new CompanyListRequest;
                //TODO HEADER
                param.body.bossId = this.aoIdentityService.loginId;
                param.body.trustKey = this.trustKeyService.Trustkey;
        
                let result = await this.http.post<any>('http://localhost:8081/firstpage/getCompanyList', JSON.parse(JSON.stringify(param))).toPromise();
                if (result.body.records.length !== 0)
                    this.customerInfo.customerId = result.body.records[0].customerId;
        
                //this._dataList = result.body.aoData;
                return result;*/
    };

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
