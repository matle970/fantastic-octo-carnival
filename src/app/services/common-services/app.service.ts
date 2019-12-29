import { Injectable } from '@angular/core';
import { AoIdentityService } from './ao-identity.service';
import { TrustkeyServeice } from './trustkey.service';
import { HttpService } from './http.service';
import { GeturlService } from './geturl.service';
import { AoProfileRequest } from 'src/app/objects/dto/firstpage/firstpage-aoProfile-request';
import { AoProfileResponse } from 'src/app/objects/dto/firstpage/firstpage-aoProfile-response';
import { HeaderServeice } from './header.service';

@Injectable({ providedIn: 'root' })
export class AppService {

    returncode: string;

    constructor(
        private httpservice: HttpService,
        private headerservice: HeaderServeice,
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
        this.headerservice.apId = data.body.apId;
        this.headerservice.branchId = data.body.branchId;
        this.headerservice.employeeId = data.body.employeeId;
        this.headerservice.clientIp = data.body.clientIp;
        this.headerservice.role = data.header.role;
        this.headerservice.roleCode = data.header.roleCode;
        this.headerservice.txnDateTime = data.body.txnDateTime;
        this.aoIdentityService.loginId = data.body.loginId;
        this.aoIdentityService.employeeName = data.body.employeeName;
        this.trustKeyService.Trustkey = data.body.trustKey;
        this.returncode = data.header.returnCode;
    }
}

