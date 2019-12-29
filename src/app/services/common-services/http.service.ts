import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DummyData } from 'src/localServer/dummy-data';
import { DummyDataService } from './dummydata.service';
import { EnvService } from 'src/environments/env.service';
import { GeturlService } from './geturl.service';
import { TokenService } from './token.service';
import { AoIdentityService } from './ao-identity.service';
import { TrustkeyServeice } from './trustkey.service';
import { HeaderServeice } from './header.service';

/*******************
 * 發送Http的Service
 **********************/
@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(
        private httpClient: HttpClient,
        private envservice: EnvService,
        private dummydataservice: DummyDataService,
        private geturlservice: GeturlService,
        private tokenservice: TokenService,
        private headerservice: HeaderServeice,
        private aoIdentityService: AoIdentityService,
        private trustKeyService: TrustkeyServeice,
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
                    break;

                case this.geturlservice.URL.FIRSTPAGE_COMPANY_LIST:
                    this.setparam(param);
                    break;

                default:
                    break;
            }
            data = await this.httpClient.post(this.envservice.apiUrl + url, param).toPromise();
            data = new dtoResponse(data);

            return data;
        }
    }

    setparam(param) {
        param.header.apId = this.headerservice.apId;
        param.header.branchId = this.headerservice.branchId;
        param.header.employeeId = this.headerservice.employeeId;
        param.header.clientIp = this.headerservice.clientIp;
        param.header.role = this.headerservice.role;
        param.header.roleCode = this.headerservice.roleCode;
        param.header.txnDateTime = this.headerservice.txnDateTime;
        param.body.bossId = this.aoIdentityService.loginId;
        param.body.trustKey = this.trustKeyService.Trustkey;
    }
}
