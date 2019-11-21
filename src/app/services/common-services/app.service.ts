import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { AoIdentityService } from './ao-identity.service';
import { TrustkeyServeice } from './trustkey.service';
import { AoProfile } from 'src/app/objects/dto/firstpage/firstpage-aoProfile-response';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    urlList = [{
      'url': this.baseService.URL.FIRSTPAGE_AO_PROFILE,
      'dtoResponse': AoProfile
    }];
    

    constructor(private baseService:BaseService, 
                  private aoIdentityService: AoIdentityService,
                  private trustKeyService: TrustkeyServeice) { }


    //TODO: assign token to request 
    sendRquest() {
        this.baseService.sendRequestAsync (this.urlList[0].url, this.urlList[0].dtoResponse)
            .then((data: any) => {
                this.aoIdentityService.aoId = data.body.aoId;
                this.aoIdentityService.aoName = data.body.employeeName;
                this.trustKeyService.Trustkey = data.body.trustKey;
            }, (err) => { });
    }
}

