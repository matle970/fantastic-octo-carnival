import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AoIdentityService } from './services/common-services/ao-identity.service';
import { TokenService } from './services/common-services/token.service';
import { AppService } from './services/common-services/app.service';
import { TrustkeyServeice } from './services/common-services/trustkey.service';
import { TimeoutService } from './services/common-services/timeout.service';
import { DummyDataService } from './services/common-services/dummydata.service';
import { AoProfileResponse } from './objects/dto/firstpage/firstpage-aoProfile-response';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    minute = 10;    //timeout minute
    time = this.minute * 600000;

    /**
     * Jewel
     * setting timeout for 10 minutes
     * if timeout, clear aoId, token and trustkey 
     * redirect to timeout component
     */
    constructor(
        private router: Router,
        private dialog: MatDialog,
        private aoidentityservice: AoIdentityService,
        private tokenservice: TokenService,
        private trustkeyservice: TrustkeyServeice,
        private timeoutservice: TimeoutService,
        private dummydataservice: DummyDataService,
        private appService: AppService,
        private route: ActivatedRoute) {

    }

    async ngOnInit() {
        // 是否使用 Dummy data
        this.dummydataservice.useDummyData = true;

        this.timeoutservice.isTimeout = false;
        setTimeout(() => {
            this.aoidentityservice.clear;
            this.tokenservice.clear;
            this.trustkeyservice.clear;
            this.timeoutservice.isTimeout = true;
            this.dialog.closeAll();
            this.router.navigate(['timeout']);
        }, this.time);

        /**Jewel
         * get request param from url
         * and keep it in tokenservice
         */
        this.route.queryParams.subscribe(value => this.tokenservice.Token = value['token']);
        this.appService.sendRquest();
    }
}
