import { Injectable } from '@angular/core';
import { AoProfile } from '../objects/dto/firstpage/firstpage-aoProfile-response';
import { AoIdentityService } from './ao-identity.service';
import { TrustkeyServeice } from './trustkey.service';
import { HttpService } from './http.service';
import { GeturlService } from './geturl.service';

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(private httpservice: HttpService,
        private aoIdentityService: AoIdentityService,
        private trustKeyService: TrustkeyServeice,
        private geturlservice: GeturlService) { }

    urlList = [{
        'url': this.geturlservice.URL.FIRSTPAGE_AO_PROFILE,
        'dtoResponse': AoProfile
    }];

    //TODO: assign token to request 
    sendRquest() {
        this.httpservice.sendRequestAsync(this.urlList[0].url, this.urlList[0].dtoResponse)
            .then((data: any) => {
                this.aoIdentityService.aoId = data.body.aoId;
                this.aoIdentityService.aoName = data.body.employeeName;
                this.trustKeyService.Trustkey = data.body.trustKey;
            }, (err) => { });
    }
}

