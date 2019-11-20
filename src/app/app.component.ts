import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TimeoutService } from './common-services/timeout.service';
import { TokenService } from './common-services/token.service';
import { TrustkeyServeice } from './common-services/trustkey.service';
import { AoIdentityService } from './common-services/ao-identity.service';
import { AppService } from './common-services/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    minute = 10;    //timeout minute
    time = this.minute * 60000;

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
        private appService: AppService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
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
