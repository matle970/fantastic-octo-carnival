import { Injectable } from '@angular/core';
import { AoIdentityService } from './ao-identity.service';
import { TrustkeyServeice } from './trustkey.service';
import { HttpService } from './http.service';
import { GeturlService } from './geturl.service';
import { AoProfileResponse } from 'src/app/objects/dto/firstpage/firstpage-aoProfile-response';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';

@Injectable({ providedIn: 'root' })
export class AppService {

    returncode: string;

    constructor(
        private httpservice: HttpService,
        private aoIdentityService: AoIdentityService,
        private trustKeyService: TrustkeyServeice,
        private geturlservice: GeturlService,
    ) { }

    urlList = [{
        'url': this.geturlservice.URL.FIRSTPAGE_AO_PROFILE,
        'dtoRequset': CommonRequest,
        'dtoResponse': AoProfileResponse
    }];

    //TODO: assign token to request 
    sendRquest() {
        this.httpservice.sendRequestAsync(
            this.urlList[0].url,
            this.urlList[0].dtoRequset,
            this.urlList[0].dtoResponse)
            .then((data: any) => {
                console.log('data', data);
                this.aoIdentityService.loginId = data.body.loginId;
                this.aoIdentityService.employeeName = data.body.employeeName;
                this.trustKeyService.Trustkey = data.body.trustKey;
                this.returncode = data.header.returnCode;
            }, (err) => { });
    }
}

