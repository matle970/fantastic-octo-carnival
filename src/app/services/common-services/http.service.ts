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
import { DateUtilService } from './date-util.service';
import { CustomerIdService } from './customerid.service';

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
        private customerIdservice: CustomerIdService,
        private dateUtilService: DateUtilService
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
                // CB001
                case this.geturlservice.URL.FIRSTPAGE_AO_PROFILE:
                    this.setparamCB001(param);
                    break;

                // CB005
                case this.geturlservice.URL.FIRSTPAGE_COMPANY_LIST:
                    this.setparamCB005(param);
                    break;

                // CB006
                case this.geturlservice.URL.FIRSTPAGE_ALL_NOTIFICATION:
                    this.setparamCB006(param);
                    break;

                // CB016
                case this.geturlservice.URL.CUSTPROFILE_GROUP_DETAIL:
                    this.setparamCB016(param);
                    break;

                // CB001 CB005 CB006 CB016 以外都是default
                default:
                    this.setparamdefault(param);
                    break;
            }
            data = await this.httpClient.post(this.envservice.apiUrl + url, param).toPromise();
            data = new dtoResponse(data);

            return data;
        }
    }

    setparamdefault(param) {
        param.header.apId = this.headerservice.apId;
        param.header.branchId = this.headerservice.branchId;
        param.header.employeeId = this.headerservice.employeeId;
        param.header.clientIp = this.headerservice.clientIp;
        param.header.role = this.headerservice.role;
        param.header.roleCode = this.headerservice.roleCode;
        param.header.txnDateTime = this.dateUtilService.txnDate;
        param.body.customerId = this.customerIdservice.customerId;
        param.body.trustKey = this.trustKeyService.Trustkey;
    }

    setparamCB001(param) {
        param.body.customerId = this.tokenservice.UserID;
        param.body.token = this.tokenservice.Token;
    }

    setparamCB005(param) {
        param.header.apId = this.headerservice.apId;
        param.header.branchId = this.headerservice.branchId;
        param.header.employeeId = this.headerservice.employeeId;
        param.header.clientIp = this.headerservice.clientIp;
        param.header.role = this.headerservice.role;
        param.header.roleCode = this.headerservice.roleCode;
        param.header.txnDateTime = this.dateUtilService.txnDate;
        param.body.bossId = this.aoIdentityService.loginId;
        param.body.trustKey = this.trustKeyService.Trustkey;
    }

    setparamCB006(param) {
    }

    setparamCB016(param) {
        param.header.apId = this.headerservice.apId;
        param.header.branchId = this.headerservice.branchId;
        param.header.employeeId = this.headerservice.employeeId;
        param.header.clientIp = this.headerservice.clientIp;
        param.header.role = this.headerservice.role;
        param.header.roleCode = this.headerservice.roleCode;
        param.header.txnDateTime = this.dateUtilService.txnDate;
        param.body.parentCompanyId = this.customerIdservice.parentCompanyId;
        param.body.trustKey = this.trustKeyService.Trustkey;
    }
}
