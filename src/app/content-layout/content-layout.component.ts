import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { AoProfileResponse } from '../objects/dto/firstpage/firstpage-aoProfile-response';
import { ActivatedRoute, Router } from '@angular/router';
import { onMainContentChange } from './common-area/animations/animations';
import { SidebarService } from '../services/common-services/sidebar.service';
import { AoIdentityService } from '../services/common-services/ao-identity.service';
import { TokenService } from '../services/common-services/token.service';
import { TrustkeyServeice } from '../services/common-services/trustkey.service';
import { AppService } from '../services/common-services/app.service';

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
        'dtoResponse': AoProfileResponse
    }];

    constructor(
        private route: ActivatedRoute,
        private sidebarservice: SidebarService,
        private aoidentityservice: AoIdentityService,
        private tokenservice: TokenService,
        private trustkeyservice: TrustkeyServeice,
        private appService: AppService) {

        super();
    }

    async ngOnInit() {
        //let result = await this.appService.sendRquest();
        this.sidebarservice.sideNavState$.subscribe(res => {
            // console.log(res);
            this.onSideNavChange = res;
        })
    }
}