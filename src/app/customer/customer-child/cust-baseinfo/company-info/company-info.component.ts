import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
    selector: 'app-company-info',
    templateUrl: './company-info.component.html',
    styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit, OnChanges {


    @Input() content: any;
    constructor() { }

    ngOnChanges() {
    }

    ngOnInit() {
    }

    getFlagClass(countryCode: string) {
        return 'flag-icon-' + countryCode;
    }

}
