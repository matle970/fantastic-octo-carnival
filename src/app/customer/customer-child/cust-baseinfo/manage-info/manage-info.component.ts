import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ManageInfoService } from 'src/app/services/customer/cust-baseinfo/manage-info.service';

export interface aoList {
    id: string;
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
    customerid_text: string = this.text.customerid_text;
    window_text: string = this.text.window_text;
    phone_text: string = this.text.phone_text;

    manageColumn = ['role', 'dev', 'wid', 'name'];
    management: aoList[] = [
        //     {
        //         id: 'a001',
        //         role: 'PS',
        //         dev: '環服部',
        //         wid: 'NT48691',
        //         name: '劉子齊',
        //         phone: '02-12345678 #1234'
        //     },
        //     {
        //         id: 'a002',
        //         role: 'TMO',
        //         dev: '金行部',
        //         wid: 'NT83333',
        //         name: '毛芝瑩',
        //         phone: '02-12345678 #1234'
        //     },
        //     {
        //         id: 'a003',
        //         role: '公司戶分行理專',
        //         dev: '信義分行',
        //         wid: 'NT81757',
        //         name: '林祐辰',
        //         phone: '02-12345678 #1234'
        //     },
        //     {
        //         id: 'a004',
        //         role: '負責人分行理專',
        //         dev: '信義分行',
        //         wid: 'NT81757',
        //         name: '林祐辰',
        //         phone: '02-12345678 #1234'
        //     },
    ];

    constructor(
        private manageinfoService: ManageInfoService
    ) { }

    ngOnChanges() {
        console.log('content', this.content);

        this.management = [
            {
                id: 'a001',
                role: 'PS',
                dev: '環服部',
                wid: 'NT48691',
                name: '劉子齊'
            }
        ]
    }

    ngOnInit() {
    }

}
