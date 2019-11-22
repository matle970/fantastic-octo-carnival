import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { AoProfile } from '../objects/dto/firstpage/firstpage-aoProfile-response';
import { ActivatedRoute, Router } from '@angular/router';
import { onMainContentChange } from './common-area/animations/animations';
import { SidebarService } from '../services/common-services/sidebar.service';
import { AoIdentityService } from '../services/common-services/ao-identity.service';
import { TokenService } from '../services/common-services/token.service';
import { TrustkeyServeice } from '../services/common-services/trustkey.service';

@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrls: ['./content-layout.component.scss'],
    animations: [onMainContentChange]
})

export class ContentLayoutComponent extends BaseComponent implements OnInit {

    token: string;
    public onSideNavChange: boolean = true;
    urlList = [{
        'url': this.URL.FIRSTPAGE_AO_PROFILE,
        'dtoResponse': AoProfile
    }];

    constructor(
        private route: ActivatedRoute,
        private sidebarservice: SidebarService,
        private aoidentityservice: AoIdentityService,
        private tokenservice: TokenService,
        private trustkeyservice: TrustkeyServeice) {

        super();
    }

    ngOnInit() {
        this.sidebarservice.sideNavState$.subscribe(res => {
            // console.log(res);
            this.onSideNavChange = res;
        })

        /**Jewel
         * get request param from url
         * and keep it in tokenservice
         */
        this.route.queryParams.subscribe((value) => {
            this.tokenservice.Token = value['token'];
        });

        this.sendRquest(this.aoidentityservice);
    }

    sendRquest(keepedData) {
        //TODO: assign token to request 
        super.sendRequestAsync(this.urlList[0].url, this.urlList[0].dtoResponse).then((data: any) => {
            this.trustkeyservice.Trustkey = data.body.token;
            keepedData.token = data.body.token;
            keepedData.aoId = data.body.aoId;
        }, (err) => {

        });
    }
}
