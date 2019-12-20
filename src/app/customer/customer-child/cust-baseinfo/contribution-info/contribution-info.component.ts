import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ContributionInfoService } from 'src/app/services/customer/cust-baseinfo/contribution-info.service';

@Component({
    selector: 'app-contribution',
    templateUrl: './contribution-info.component.html',
    styleUrls: ['./contribution-info.component.scss']
})
export class ContributionInfoComponent implements OnInit, OnChanges {

    @Input() content: any;

    // html text
    text = this.contributioninfoService.baseservice.gettextservice.custbaseinfotext;
    contribution_text = this.text.contribution_text;
    data_period_text: string = this.contributioninfoService.baseservice.gettextservice.text.data_period_text;
    contribution_lastyeartotal_text = this.text.contribution_lastyeartotal_text;
    contribution_thisyeartotal_text = this.text.contribution_thisyeartotal_text;
    sum_text = this.text.sum_text;
    change_text = this.text.change_text;

    // 資料期間
    data_period: string;
    // 去年度累積貢獻度期間
    contribution_lastyear_period: string;
    // 今年度累積貢獻度期間
    contribution_thisyear_period: string;
    // 去年合計
    lastsum: number = 0;
    // 今年合計
    thissum: number = 0;
    // 變化合計
    changesum: string;
    // 增減變化
    changearr: Array<any> = [];

    constructor(
        private contributioninfoService: ContributionInfoService
    ) { }

    ngOnChanges() {
        this.getdataperiod();
        this.getsum();
        this.getchange();
    }

    ngOnInit() {
    }

    getdataperiod() {
        let sysdate = new Date();
        this.data_period =
            String(sysdate.getFullYear() - 1) + '/' + '12' + '~' +
            String(sysdate.getFullYear()) + '/' + String(sysdate.getMonth() + 1 - 1).padStart(2, '0');
        this.contribution_thisyear_period = this.data_period;
        this.contribution_lastyear_period =
            String(sysdate.getFullYear() - 2) + '/' + '12' + '~' +
            String(sysdate.getFullYear()) + '/' + '11';
    }

    getsum() {
        for (var i = 0; i < this.content.data.lastcontri.contribution.length; i++) {
            this.lastsum = this.lastsum + Number(this.content.data.lastcontri.contribution[i]);
        }
        for (var j = 0; j < this.content.data.thiscontri.contribution.length; j++) {
            this.thissum = this.thissum + Number(this.content.data.thiscontri.contribution[j]);
        }
    }

    getchange() {
        for (let i = 0; i < this.content.data.contributionType.length; i++) {
            if (this.content.data.thiscontri.contribution[i] > this.content.data.lastcontri.contribution[i]) {
                this.changearr.push('+');
            } else if (this.content.data.thiscontri.contribution[i] < this.content.data.lastcontri.contribution[i]) {
                this.changearr.push('-');
            } else {
                this.changearr.push('');
            }
        }

        if (this.thissum > this.lastsum) {
            this.changesum = '+' + String(this.thissum - this.lastsum);
        } else if (this.thissum < this.lastsum) {
            this.changesum = String(this.thissum - this.lastsum);
        } else {
            this.changesum = '0';
        }
    }
}
