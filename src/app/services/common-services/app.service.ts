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
    async sendRquest(): Promise<AoProfileResponse> {
        let data = await this.httpservice.sendRequestAsync(
            this.urlList[0].url,
            this.urlList[0].dtoRequset,
            this.urlList[0].dtoResponse);
        this.headerservice.apId = data.header.apId;
        this.headerservice.branchId = data.header.branchId;
        this.headerservice.employeeId = data.header.employeeId;
        this.headerservice.clientIp = data.header.clientIp;
        this.headerservice.role = data.header.role;
        this.headerservice.roleCode = data.header.roleCode;
        this.headerservice.txnDateTime = data.header.txnDateTime;
        this.aoIdentityService.loginId = data.body.loginId;
        this.aoIdentityService.employeeName = data.body.employeeName;
        this.trustKeyService.Trustkey = data.body.trustKey;
        return data;
    }
}

