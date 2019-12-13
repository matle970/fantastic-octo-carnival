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
    capitalamt_text: string = this.text.capitalamt_text;
    realcapitalamt_text: string = this.text.realcapitalamt_text;
    establishmentdate_text: string = this.text.establishmentdate_text;
    chiefname_text: string = this.text.chiefname_text;
    registeraddress_text: string = this.text.registeraddress_text;
    residenceaddress_text: string = this.text.residenceaddress_text;
    address_text: string = this.text.address_text;
    personincharge_text: string = this.text.personincharge_text;
    age_text: string = this.text.age_text;
    birthday_text: string = this.text.birthday_text;
    AUM_text: string = this.text.AUM_text;
    wineglass_text: string = this.text.wineglass_text;
    campingtent_text: string = this.text.campingtent_text;
    cigar_text: string = this.text.cigar_text;
    golfball_text: string = this.text.golfball_text;
    watertransportation_text: string = this.text.watertransportation_text;
    dutyfree_text: string = this.text.dutyfree_text;
    aroundtheglobe_text: string = this.text.aroundtheglobe_text;
    picasso_text: string = this.text.picasso_text;
    gramophone_text: string = this.text.gramophone_text;
    pottery_text: string = this.text.pottery_text;
    medal_text: string = this.text.medal_text;
    mate_text: string = this.text.mate_text;
    contactpersons_text: string = this.text.contactpersons_text;

    choosenumber: number = 2;
    keepaddress: string;

    constructor(
        private companyinfoService: CompanyInfoService
    ) { }

    ngOnChanges() {
        this.keepaddress = this.content.data.address;
    }

    ngOnInit() {
    }

    getFlagClass(countryCode: string) {
        return 'flag-icon-' + countryCode;
    }

    chooseaddress(id: number) {
        this.choosenumber = id;
        switch (this.choosenumber) {
            case 0:
                this.keepaddress = this.content.data.registerAddress;
                break;
            case 1:
                this.keepaddress = this.content.data.residenceAddress;
                break;
            case 2:
                this.keepaddress = this.content.data.address;
                break;
        }
    }
}
