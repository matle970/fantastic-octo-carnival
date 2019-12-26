import { Component, OnInit } from '@angular/core';
import { AoIdentityService } from 'src/app/services/common-services/ao-identity.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    accountName: string;
    aoId: string;

    constructor(private aoIdentityService: AoIdentityService) { }

    ngOnInit() {
        this.accountName = this.aoIdentityService.employeeName;
        this.aoId = this.aoIdentityService.loginId;
    }

}
