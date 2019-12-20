import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GroupInfoService } from 'src/app/services/customer/cust-baseinfo/group-info.service';

export interface GroupElement {
    cus_id: string;
    cus_name: string;
    type: string;
    mount: string;
    total: string;
}

@Component({
    selector: 'app-group-info',
    templateUrl: './group-info.component.html',
    styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit, OnChanges {

    @Input() content: any;

    // html text
    text = this.groupinfoService.baseservice.gettextservice.custbaseinfotext;
    groupinfo_text: string = this.text.groupinfo_text;
    contribute_data_period_text: string = this.text.contribute_data_period_text;
    contribution_lastyeartotal_text: string = this.text.contribution_lastyeartotal_text;
    contribution_thisyeartotal_text: string = this.text.contribution_thisyeartotal_text;
    sumtotaldepositbal_text: string = this.text.sumtotaldepositbal_text;
    sumtotalloanbal_text: string = this.text.sumtotalloanbal_text;
    sumtotaltradefinancebal_text: string = this.text.sumtotaltradefinancebal_text;
    group_amount_usage_text: string = this.text.group_amount_usage_text;
    customerid_text: string = this.text.customerid_text;
    customer_name_text: string = this.text.customer_name_text;
    amount_type_text: string = this.text.amount_type_text;
    amount_text: string = this.text.amount_text;
    balance_text: string = this.text.balance_text;

    groupColumns = ['cus_id', 'cus_name', 'type', 'mount', 'total'];
    groupSources: GroupElement[] = [];

    constructor(
        private groupinfoService: GroupInfoService
    ) { }

    ngOnChanges() {
        if (this.content.data.groupMemberLoanInfo.length !== 0) {
            for (let i = 0; i < this.content.data.groupMemberLoanInfo.length; i++) {
                this.groupSources.push(
                    {
                        cus_id: this.content.data.groupMemberLoanInfo[i].customerId,
                        cus_name: this.content.data.groupMemberLoanInfo[i].customerName,
                        type: this.content.data.groupMemberLoanInfo[i].breakdownCodeDesc,
                        mount: this.content.data.groupMemberLoanInfo[i].sumfacdFxLimitAmt,
                        total: this.content.data.groupMemberLoanInfo[i].sumLbFxCurrentBal
                    }
                );
            }
        }
    }

    ngOnInit() { }

}