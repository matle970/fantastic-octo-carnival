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

    constructor(
        private httpClient: HttpClient,
        private envservice: EnvService,
        private dummydataservice: DummyDataService,
        private tokenservice: TokenService,
        private geturlservice: GeturlService
    ) { }

    /**
    * Send request
    * @param url 查詢URL
    * @param dtoRequest 請求樣式
    * @param dtoResponse 回傳樣式
    */
    async sendRequestAsync(url: string, dtoRequest: any, dtoResponse: any) {
        let data: any;

        if (this.dummydataservice.useDummyData === true) {
            const dummy = new DummyData;
            data = dummy.getDummyData(url, dtoRequest, dtoResponse);
            return data;
        } else {
            let param = new dtoRequest;

            switch (url) {
                case this.geturlservice.URL.FIRSTPAGE_AO_PROFILE:
                    param.body.customerId = this.tokenservice.UserID;
                    param.body.token = this.tokenservice.Token;
                    data = await this.httpClient.post(this.envservice.apiUrl + url, param).toPromise();
                    break;

                default:
                    break;
            }
            data = new dtoResponse(data);
            return data;
        }
    }
}
