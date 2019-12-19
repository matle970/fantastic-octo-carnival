import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { CommonResponse } from 'src/app/objects/dto/common/common-response';
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
    CompanyAssociateAssets: any = {};

    // group
    Group: any = {};
    GroupDetail: any = {};
    sumfacdFxLimitAmt: number = 0;
    sumLbFxCurrentBal: number = 0;

    // manage
    Manage: any = {};
    ManageDetail: any = {};

    // contribution
    Contribution: any = {};
    ContributionDetail: any = {};
    ContributionPeriod: string;         // 貢獻度-資料區間
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
        this.Manage = this.custbaseinfoService.Manage;
        this.ManageDetail = this.custbaseinfoService.ManageDetail;
        // console.log('this.Manage', this.Manage);
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
        this.CompanyAssociateAssets = this.custbaseinfoService.CompanyAssociateAssets;
        // console.log('this.CompanyAssociate', this.CompanyAssociate);
        // console.log('this.CompanyAssociateAssets', this.CompanyAssociateAssets);
    }

    setContribution() {
        this.Contribution = this.custbaseinfoService.Contribution;
        // console.log('this.Contribution', this.Contribution);
        this.ContributionPeriod = this.custbaseinfoService.ContributionPeriod;
        this.ContributionLastYearTotal = this.custbaseinfoService.ContributionLastYearTotal;
        this.ContributionThisYearTotal = this.custbaseinfoService.ContributionThisYearTotal;
        this.ChartData.xaxis.categories = this.custbaseinfoService.ChartDatacategories;
        this.ChartData.series = this.custbaseinfoService.ChartDataseries;
    }

    openDialog(modalId: number, wide?: boolean) {
        this.custbaseinfoService.openDialog(modalId, wide);
    }













    apiUrls: string[] = []; // 此componment需要發送的API urls

    lastcontriPeriod: string; // 貢獻度, 去年區間
    thiscontriPeriod: string; // 貢獻度, 今年區間

    contributionText = this.text.contribution;

    //集團資訊的假資料
    group_info = {
        date: '2019/08/06',
        company_name: '德魯納集團',
        data_list: []
    }

    /*******************
     * 取得基本資訊所有的API Urls
     * @param param : api所需的參數值
     ********************/
    // getBaseInfoApiUrls() {
    //     const urls = this.URL.customerProfile.Layer1;
    //     Object.keys(urls).forEach(value => {
    //         console.log(urls[value]);
    //         this.apiUrls.push(urls[value]);
    //     });
    // }

    /*******************
     * 準備發送的API request Obj
     * {'url': string, 'param': param}
     * @param param : api所需的參數值
     ********************/
    // prepareBaseInfoApiRequest(urls: string[], param: any) {

    //     const requestParam = [];
    //     urls.forEach(value => {
    //         requestParam.push({ 'url': value, 'param': param });
    //     });
    //     return requestParam;
    // }

    /*******************
     * 發送API取得基本資料
     * *****************/
    // getBaseInfoData(request: any) {
    //     request.forEach(value => {
    //         this.getRequestData(value.url, value.param).then((response: any) => {
    //             this.setBaseInfo(value.url, plainToClass(CommonResponse, response));
    //         }).catch((error: any) => {
    //             console.log('error' + error);
    //         });
    //     });
    // }

    /*******************
     * 依各個 URL 塞各自的資料
     * *****************/
    // setBaseInfo(url: string, response: any) {
    //     console.log(response);
    //     const status = response.header.returnCode;
    //     const data = response.body;
    //     if (status === '0000') {
    //         switch (url) {
    //             case this.URL.customerProfile.Layer1.getCBCompany:
    //                 console.log('公司資訊');
    //                 break;
    //             case this.URL.customerProfile.Layer1.getCBGroup:
    //                 console.log('集團資訊');
    //                 break;
    //             case this.URL.customerProfile.Layer1.getCBManage:
    //                 console.log('經管資訊');
    //                 break;
    //             case this.URL.customerProfile.Layer1.getCBContribution:
    //                 console.log('貢獻度');
    //                 this.setContributionData(data);
    //                 break;
    //             default:
    //                 console.log('url not found');
    //                 break;
    //         }
    //     }
    // }

    // 塞貢獻度資料
    // setContributionData(data: any) {
    //     // 取得貢獻度資料, 每個值存成arry & 圖表標頭 & 更新圖表
    //     const lastYear: number[] = [];
    //     const thisYear: number[] = [];
    //     for (let i = 1; i < 7; i++) {
    //         lastYear.push(super.getUtilsService().removeCommafy(data.lastcontri['profittype' + i]));
    //         thisYear.push(super.getUtilsService().removeCommafy(data.thiscontri['profittype' + i]));
    //     }
    //     console.log(lastYear);
    //     console.log(thisYear);

    //     const lastYearStart = super.getUtilsService().changeDateStr(data.lastcontri.startym, 'yyyy/MM');
    //     const lastYearEnd = super.getUtilsService().changeDateStr(data.lastcontri.endym, 'yyyy/MM');
    //     const thisYearStart = super.getUtilsService().changeDateStr(data.thiscontri.startym, 'yyyy/MM');
    //     const thisYearEnd = super.getUtilsService().changeDateStr(data.thiscontri.endym, 'yyyy/MM');

    //     const lastYearPeriod = lastYearStart + '-' + lastYearEnd;
    //     const thisYearPeriod = thisYearStart + '-' + thisYearEnd;
    // }
}