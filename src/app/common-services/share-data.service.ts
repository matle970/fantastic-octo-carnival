import { Injectable } from '@angular/core';
import { CommonHeaderRequest } from '../objects/dto/common/common-header-request';

/*******************
 * 存放已發送過API的資料
 **********************/
@Injectable({ providedIn: 'root' })
export class ShareDataService {
    // URLs
    URL = require('src/app/objects/url/url.json');

    dataMap: Map<String, any> = new Map<String, any>(); // Cache data

    customerId: string = 'A1111111'; // 測試先寫死
    trustKey: string = '2f616880-4eec-479a-9e66-ea3997c06622-1564639573213'; // 測試先寫死;

    constructor() { }

    setCacheData(url: string, data: any) { // 設定cache資料
        this.dataMap.set(url, data);
    }

    getCacheData(url: string) { // 取得cache資料
        return this.dataMap.get(url);
    }

    checkIfGetCatcheDataByArry(urls: string[]) {
        console.log(urls);
        let haveData = true;
        const obj = [];
        urls.forEach(value => {
            obj.push(this.dataMap.get(value));
        }
        );
        if (obj.includes(undefined)) {
            haveData = false;
        }
        console.log(obj);
        return haveData;
    }

    /*******************
     * 測試Hard Code區塊
     **********************/
    // 取得Header資訊(未來視規則更改)
    getHeaderData() {
        const header = new CommonHeaderRequest();
        header.apId = 'CRMILXCRM01';
        header.branchId = '00081';
        header.employeeId = '13063';
        header.clientIp = '255.255.255.255';
        header.txnDateTime = '20190221123030'; // yyyyMMddhhmmss
        return header;
    }

    // 取得基本資訊的參數值
    getCustomerProfileParam() {
        const param = {};
        param['customerId'] = this.customerId;
        param['trustKey'] = this.trustKey;
        return param;
    }
}
