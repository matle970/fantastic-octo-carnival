import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CompanyInfoService } from 'src/app/services/customer/cust-baseinfo/company-info.service';


@Component({
    selector: 'app-company-info',
    templateUrl: './company-info.component.html',
    styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit, OnChanges {

    @Input() content: any;

    // html text
    text = this.companyinfoService.baseservice.gettextservice.custbaseinfotext;
    stockcode_text: string = this.text.stockcode_text;

    constructor(
        private companyinfoService: CompanyInfoService
    ) { }

    ngOnChanges() {
    }

    ngOnInit() {
    }

    getFlagClass(countryCode: string) {
        return 'flag-icon-' + countryCode;
    }

}
