import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ManageInfoService } from 'src/app/services/customer/cust-baseinfo/manage-info.service';

export interface aoList {
    role: string;
    dev: string;
    wid: string;
    name: string;
}

@Component({
    selector: 'app-manage-info',
    templateUrl: './manage-info.component.html',
    styleUrls: ['./manage-info.component.scss']
})
export class ManageInfoComponent implements OnInit, OnChanges {

    @Input() content: any;

    // html text
    text = this.manageinfoService.baseservice.gettextservice.custbaseinfotext;
    manageinfo_text: string = this.text.manageinfo_text;
    customerid_text: string = this.text.customerid_text;
    window_text: string = this.text.window_text;
    phone_text: string = this.text.phone_text;

    manageColumn = ['role', 'dev'];
    management: aoList[] = [];

    constructor(
        private manageinfoService: ManageInfoService
    ) { }

    ngOnChanges() {

        if (this.content.psId !== null) {
            this.management.push(
                {
                    role: 'PS',
                    dev: this.content.data.psBranchDesc,
                    wid: this.content.data.psId,
                    name: this.content.data.psName
                }
            );
        }

        if (this.content.tmoId !== null) {
            this.management.push(
                {
                    role: 'TMO',
                    dev: this.content.data.tmoBranchDesc,
                    wid: this.content.data.tmoId,
                    name: this.content.data.tmoName
                }
            );
        }

        if (this.content.principalWmAoId !== null) {
            this.management.push(
                {
                    role: '公司戶分行理專',
                    dev: this.content.data.principalWmAoBranchDesc,
                    wid: this.content.data.principalWmAoId,
                    name: this.content.data.principalWmAoName
                }
            );
        }

        if (this.content.wmAoId !== null) {
            this.management.push(
                {
                    role: '負責人分行理專',
                    dev: this.content.data.wmAoBranchDesc,
                    wid: this.content.data.wmAoId,
                    name: this.content.data.wmAoName
                }
            );
        }
    }

    ngOnInit() {
    }

}
