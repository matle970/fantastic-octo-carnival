import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DummyData } from 'src/localServer/dummy-data';
import { DummyDataService } from './dummydata.service';
import { EnvService } from 'src/environments/env.service';
import { GeturlService } from './geturl.service';
import { TokenService } from './token.service';

/*******************
 * 發送Http的Service
 **********************/
@Injectable({ providedIn: 'root' })
export class HttpService {

    apiDomain: string = this.envservice.apiUrl; // API Domain name

    constructor(
        private httpClient: HttpClient,
        private envservice: EnvService,
        private dummydataservice: DummyDataService,
        private geturlservice: GeturlService,
        private tokenservice: TokenService
    ) { }

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
            return new Promise((resolve, reject) => {
                resolve(this.sendAPI(url, dtoRequest, dtoResponse));
                reject();
            });
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
    sendAPI(url: string, dtoRequest: any, dtoResponse: any) {
        let RequestData: any;
        switch (url) {
            case this.geturlservice.URL.FIRSTPAGE_AO_PROFILE:
                RequestData = {
                    "header": {},
                    "body": {
                        "customerId": this.tokenservice.UserID,
                        "token": this.tokenservice.Token
                    }
                }
                break;
        }
        return this.sendHttpByPost(url, dtoResponse, RequestData);
    }

    /**
    * send HTTP by POST
    * @param url 查詢URL
    * @param dtoRequest 請求樣式
    * @param dtoResponse 回傳樣式
    */
    async sendHttpByPost(url: string, dtoResponse: any, RequestData: object) {
        await this.httpClient.post<any>(this.apiDomain + url, RequestData).toPromise().then((value: any) => {
            console.log('value', value);
            return value;
        });
    }
}
