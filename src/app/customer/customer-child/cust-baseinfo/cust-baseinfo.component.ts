import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { CustBaseinfoService } from '../../../services/customer/cust-baseinfo/cust-baseinfo.service';

@Component({
    selector: 'app-cust-baseinfo',
    templateUrl: './cust-baseinfo.component.html',
    styleUrls: ['./cust-baseinfo.component.scss']
})

export class CustBaseInfoComponent implements OnInit, OnChanges {
    @Input('searchStr') searchStr: string;

    // html text
    text = this.custbaseinfoService.baseservice.gettextservice.custbaseinfotext;
    baseinfo_text: string = this.text.baseinfo_text;
    tag_green_text: string = this.text.tag_green_text;
    tag_blue_text: string = this.text.tag_blue_text;
    tag_gold_text: string = this.text.tag_gold_text;
    tag_orange_text: string = this.text.tag_orange_text;
    tag_red_text: string = this.text.tag_red_text;
    uniform_numbers_text: string = this.text.uniform_numbers_text;
    companyinfo_text: string = this.text.companyinfo_text;
    nextreviewdate_text: string = this.text.nextreviewdate_text;
    TCRI_text: string = this.text.TCRI_text;
    MSR_text: string = this.text.MSR_text;
    RORWA_text: string = this.text.RORWA_text;
    RAROC_text: string = this.text.RAROC_text;
    manageinfo_text: string = this.text.manageinfo_text;
    groupinfo_text: string = this.text.groupinfo_text;
    sumfacdfxlimitamt_text: string = this.text.sumfacdfxlimitamt_text;
    sumlbfxcurrentbal_text: string = this.text.sumfacdfxlimitamt_text;
    personal_account_text: string = this.text.personal_account_text;
    debt_text: string = this.text.debt_text;
    assets_text: string = this.text.assets_text;
    creditcard_quota_text: string = this.text.creditcard_quota_text;
    contribution_text: string = this.text.contribution_text;
    data_period_text: string = this.text.data_period_text;
    contribution_lastyeartotal_text: string = this.text.contribution_lastyeartotal_text;
    contribution_thisyeartotal_text: string = this.text.contribution_thisyeartotal_text;

    // show status
    public loadingStatus: boolean;
    public identityStatus: boolean;
    public hideBlock: boolean;
    public hasResult: boolean;
    public nodata: string;

    // 授網薪集黑
    CompanyFlag: Array<any> = [];

    // company
    Company: any = {};
    CompanyDetail: any = {};

    // comanyassociate
    CompanyAssociate: any = {};

    // group
    Group: any = {};
    GroupDetail: any = {};
    sumfacdFxLimitAmt: number = 0;
    sumLbFxCurrentBal: number = 0;

    // manage
    ManageDetail: any = {};

    // contribution
    Contribution: any = {};
    ContributionLastYearTotal: number;  // 貢獻度去年累計
    ContributionThisYearTotal: number;  // 貢獻度去年累計
    ChartData = {                       // 貢獻度圖表資訊
        series: [],
        colors: ['#76BC21', '#009F41'],
        chart: {
            fontFamily: '微軟正黑體',
            foreColor: '#000000',
            toolbar: {
                show: false
            },
            height: 280,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {   // 顯示在圖表上的數字，要隱藏，user不用。
            enabled: false,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#000000']
            }
        },
        responsive: [
            {
                breakpoint: 1400,
                options: {
                    chart: {
                        width: '85%',
                        height: 300
                    }
                }
            },
            {
                breakpoint: 900,
                options: {
                    chart: {
                        width: '90%',
                        height: 350
                    }
                }
            }
        ],
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: [],
            labels: {
                style: {
                    fontSize: '14px',
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '16px',
                }
            }
        },
        legend: {
            position: 'top',
            labels: {
                colors: '#000000',
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: undefined,
                radius: 12,
                customHTML: undefined,
                onClick: undefined,
                offsetX: 0,
                offsetY: 0
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    const pnum = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    return pnum;
                },
            }
        }
    };

    CompanyNotification: any = {};

    constructor(
        private custbaseinfoService: CustBaseinfoService) {
    }

    async ngOnChanges() {
        if (this.searchStr !== undefined && this.searchStr !== null) {
            await this.custbaseinfoService.sendRquest();
            this.setData();
        }
    }

    async ngOnInit() {
        await this.custbaseinfoService.sendRquest();
        this.setData();
    }

    setData() {
        this.setCompany();
        this.setManage();
        this.setGroup();
        this.setCompanyAssociate();
        this.setContribution();

        this.CompanyFlag = this.custbaseinfoService.CompanyFlag;
    }

    setCompany() {
        this.Company = this.custbaseinfoService.Company;
        this.CompanyDetail = this.custbaseinfoService.CompanyDetail;
        // console.log('this.Company', this.Company);
        // console.log('this.CompanyDetail', this.CompanyDetail);
    }

    setManage() {
        this.ManageDetail = this.custbaseinfoService.ManageDetail;
        // console.log('this.ManageDetail', this.ManageDetail);
    }

    setGroup() {
        this.Group = this.custbaseinfoService.Group;
        this.GroupDetail = this.custbaseinfoService.GroupDetail;
        this.sumfacdFxLimitAmt = this.custbaseinfoService.sumfacdFxLimitAmt;
        this.sumLbFxCurrentBal = this.custbaseinfoService.sumLbFxCurrentBal;
        // console.log('this.Group', this.Group);
        // console.log('this.GroupDetail', this.GroupDetail);
    }

    setCompanyAssociate() {
        this.CompanyAssociate = this.custbaseinfoService.CompanyAssociate;
        // console.log('this.CompanyAssociate', this.CompanyAssociate);
    }

    setContribution() {
        this.Contribution = this.custbaseinfoService.Contribution;
        // console.log('this.Contribution', this.Contribution);
        this.ContributionLastYearTotal = this.custbaseinfoService.ContributionLastYearTotal;
        this.ContributionThisYearTotal = this.custbaseinfoService.ContributionThisYearTotal;
        this.ChartData.xaxis.categories = this.custbaseinfoService.ChartDatacategories;
        this.ChartData.series = this.custbaseinfoService.ChartDataseries;
    }

    openDialog(modalId: number, wide?: boolean) {
        this.custbaseinfoService.openDialog(modalId, wide);
    }
}