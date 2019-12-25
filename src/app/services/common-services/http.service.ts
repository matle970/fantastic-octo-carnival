import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { plainToClass } from 'class-transformer';
import { DummyData } from 'src/localServer/dummy-data';
import { DummyDataService } from './dummydata.service';
import { ShareDataService } from './share-data.service';
import { EnvService } from 'src/environments/env.service';

/*******************
 * 發送Http的Service
 **********************/
@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(
        private httpClient: HttpClient,
        private sharedataservice: ShareDataService,
        private envservice: EnvService,
        private dummydataservice: DummyDataService
    ) { }

    apiDomain: string = this.envservice.apiUrl; // API Domain name

    /**
    * Send request
    * @param url 查詢URL
    * @param dtoRequest 請求樣式
    * @param dtoResponse 回傳樣式
    */
    sendRequestAsync(url: string, dtoRequest: any, dtoResponse: any): Promise<any> {
        let data: any;

        if (this.dummydataservice.useDummyData) {
            const dummy = new DummyData();
            data = dummy.getDummyData(url, dtoRequest, dtoResponse);
            return new Promise((resolve, reject) => {
                resolve(this.returnData(data));
                reject();
            });
        } else {
            // return new Promise((resolve, reject) => {
            //     resolve(this.sendAPI(url, dtoResponse));
            //     reject();
            // });
        }
    }

    returnData(data: string) {
        return data;
    }

    /**
    * Send request
    * @param url 查詢URL
    * @param dtoRequest 請求樣式
    * @param dtoResponse 回傳樣式
    */
    sendAPI(url: string, dtoRequest: any, dtoResponse?: any) {
        
    }




















    /******************
     * Send by post
     * ****************/
    sendHttpByPost(url: string, rs: any, param: object): Promise<{}> {
        return new Promise<{}>((resolve) => {
            // console.log('this.apiDomain', this.apiDomain);
            this.httpClient.post<any>(this.apiDomain + url, param).toPromise().then((value: any) => {
                resolve(plainToClass(rs, value)); // 回傳的資料轉回需要的response object
                this.sharedataservice.setCacheData(url, plainToClass(rs, value)); // 儲存 Data資料
            });
        });
    }

}
