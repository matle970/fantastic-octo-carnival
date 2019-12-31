import { Component, OnInit } from '@angular/core';
import { AoIdentityService } from 'src/app/services/common-services/ao-identity.service';
import { TrustkeyServeice } from 'src/app/services/common-services/trustkey.service';
import { TokenService } from 'src/app/services/common-services/token.service';


@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    authStatus: boolean;
    employeeName: string;
    loginId: string;

    constructor(private aoIdentityService: AoIdentityService,
        private trustKeyService: TrustkeyServeice,
        private tokenService: TokenService) { }

    ngOnInit() {
        this.authStatus = this.trustKeyService.authStatus;
        this.loginId = this.tokenService.UserID;
        if (this.authStatus) {
            this.loginId = this.aoIdentityService.loginId;
            this.employeeName = this.aoIdentityService.employeeName;
        }
    }
}
