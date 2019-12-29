import { Injectable } from '@angular/core';
import { AoIdentityService } from './ao-identity.service';
import { TrustkeyServeice } from './trustkey.service';
import { HttpService } from './http.service';
import { GeturlService } from './geturl.service';
import { AoProfileRequest } from 'src/app/objects/dto/firstpage/firstpage-aoProfile-request';
import { AoProfileResponse } from 'src/app/objects/dto/firstpage/firstpage-aoProfile-response';
import { HeadServeice } from './head.service';

@Injectable({ providedIn: 'root' })
export class AppService {

    returncode: string;

    constructor(
        private httpservice: HttpService,
        private headservice: HeadServeice,
        private aoIdentityService: AoIdentityService,
        private trustKeyService: TrustkeyServeice,
        private geturlservice: GeturlService,
    ) { }

    urlList = [{
        'url': this.geturlservice.URL.FIRSTPAGE_AO_PROFILE,
        'dtoRequset': AoProfileRequest,
        'dtoResponse': AoProfileResponse
    }];

    //TODO: assign token to request
    async sendRquest() {
        let data = await this.httpservice.sendRequestAsync(
            this.urlList[0].url,
            this.urlList[0].dtoRequset,
            this.urlList[0].dtoResponse);
        this.headservice.apId = data.body.apId;
        this.headservice.branchId = data.body.branchId;
        this.headservice.employeeId = data.body.employeeId;
        this.headservice.clientIp = data.body.clientIp;
        this.headservice.role = data.header.role;
        this.headservice.roleCode = data.header.roleCode;
        this.headservice.txnDateTime = data.body.txnDateTime;
        this.aoIdentityService.loginId = data.body.loginId;
        this.aoIdentityService.employeeName = data.body.employeeName;
        this.trustKeyService.Trustkey = data.body.trustKey;
        this.returncode = data.header.returnCode;
    }
}

