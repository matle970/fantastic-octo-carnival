import { Injectable } from '@angular/core';
import { Company } from 'src/app/objects/dto/custprofile/custprofile-company-response';
import { CompanyDetail } from 'src/app/objects/dto/custprofile/custprofile-companyDetail-response';
import { CompanyAssociate } from 'src/app/objects/dto/custprofile/custprofile-companyAssociate-response';
import { CompanyAssociateAssets } from 'src/app/objects/dto/custprofile/custprofile-companyAssociateAssets-response';
import { Group } from 'src/app/objects/dto/custprofile/custprofile-group-response';
import { GroupDetail } from 'src/app/objects/dto/custprofile/custprofile-groupDetail-response';
import { Manage } from 'src/app/objects/dto/custprofile/custprofile-manage-response';
import { ManageDetail } from 'src/app/objects/dto/custprofile/custprofile-manageDetail-response';
import { Contribution } from 'src/app/objects/dto/custprofile/custprofile-contribution-response';
import { ContributionDetail } from 'src/app/objects/dto/custprofile/custprofile-contributionDetail-response';
import { CompanyNotification } from 'src/app/objects/dto/custprofile/custprofile-companyNotification-response';
import { BaseService } from 'src/app/services/common-services/base/base.service';
import { GettextService } from '../../common-services/gettext.service';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';

@Injectable({
    providedIn: 'root'
})
export class CustBaseinfoService {

    constructor(
        public baseservice: BaseService,
    ) { }

    // html text
    text = this.baseservice.gettextservice.custbaseinfotext;

    urlList = [
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY,
            'dtoRequset': CommonRequest,
            'dtoResponse': Company
        },
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': CompanyDetail
        },
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_ASSOCIATE,
            'dtoRequset': CommonRequest,
            'dtoResponse': CompanyAssociate
        },
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_ASSOCIATE_ASSETS,
            'dtoRequset': CommonRequest,
            'dtoResponse': CompanyAssociateAssets
        },
        // {
        //     'url': this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP,
        //     'dtoRequset': CommonRequest,
        //     'dtoResponse': Group
        // },
        // {
        //     'url': this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP_DETAIL,
        //     'dtoRequset': CommonRequest,
        //     'dtoResponse': GroupDetail
        // },
        // {
        //     'url': this.baseservice.geturlservice.URL.CUSTPROFILE_MANAGE,
        //     'dtoRequset': CommonRequest,
        //     'dtoResponse': Manage
        // },
        // {
        //     'url': this.baseservice.geturlservice.URL.CUSTPROFILE_MANAGE_DETAIL,
        //     'dtoRequset': CommonRequest,
        //     'dtoResponse': ManageDetail
        // },
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_CONTRIBUTION,
            'dtoRequset': CommonRequest,
            'dtoResponse': Contribution
        },
        // {
        //     'url': this.baseservice.geturlservice.URL.CUSTPROFILE_CONTRIBUTION_DETAIL,
        //     'dtoRequset': CommonRequest,
        //     'dtoResponse': ContributionDetail
        // },
        // {
        //     'url': this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_NOTIFICATION,
        //     'dtoRequset': CommonRequest,
        //     'dtoResponse': CompanyNotification
        // }
    ];

    // 基本資訊-公司資訊第一層
    Company: any = {};
    // 基本資訊-公司資訊第二層
    CompanyDetail: any = {};
    // 基本資訊-個人關聯戶第二層(關聯戶基本資訊)
    CompanyAssociate: any = {};
    // 基本資訊-個人關聯戶第二層(客戶資產負債)
    CompanyAssociateAssets: any = {};
    // 基本資訊-集團資訊第一層
    Group: any = {};
    // 基本資訊-集團資訊第二層
    GroupDetail: any = {};
    // 基本資訊-經管資訊第一層
    Manage: any = {};
    // 基本資訊-經管資訊第二層
    ManageDetail: any = {};
    // 基本資訊-貢獻度第一層
    Contribution: any = {};
    // 基本資訊-貢獻度第二層
    ContributionDetail: any = {};
    // 基本資訊-訊息通知
    CompanyNotification: any = {};

    // 授網薪集黑
    CompanyFlag: Array<any> = [
        { id: "1", text: this.text.tag_green_text, letter: this.text.tag_green_letter, status: false },
        { id: "2", text: this.text.tag_blue_text, letter: this.text.tag_blue_letter, status: false },
        { id: "3", text: this.text.tag_gold_text, letter: this.text.tag_gold_letter, status: false },
        { id: "4", text: this.text.tag_orange_text, letter: this.text.tag_orange_letter, status: false },
        { id: "5", text: this.text.tag_red_text, letter: this.text.tag_red_letter, status: false }
    ];

    // 貢獻度-資料區間
    ContributionPeriod: string;
    // 貢獻度去年累計
    ContributionLastYearTotal: number;
    // 貢獻度去年累計
    ContributionThisYearTotal: number;
    // 圖表資訊
    ChartData: any = {};

    sendRquest() {
        for (let i = 0; i < this.urlList.length; i++) {
            this.baseservice.httpservice.sendRequestAsync(
                this.urlList[i].url,
                this.urlList[i].dtoRequset,
                this.urlList[i].dtoResponse).then(data => {
                    if (data.header.returnCode === '0000') {
                        this.dataProcess(data, this.urlList[i].url);
                    }
                }, err => {
                    console.log('Error: ', err);
                });
        }
    }

    dataProcess(data: any, url: string) {
        switch (url) {
            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY:
                this.Company = {
                    data: data.body
                };
                this.setComflag(this.Company.data.compFlag);
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_DETAIL:
                this.CompanyDetail = {
                    data: data.body
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_ASSOCIATE:
                this.CompanyAssociate = {
                    data: data.body
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_ASSOCIATE_ASSETS:
                this.CompanyAssociateAssets = {
                    data: data.body
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP:
                this.Group = {
                    data: data.body
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP_DETAIL:
                this.GroupDetail = {
                    data: data.body
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_MANAGE:
                this.Manage = {
                    data: data.body
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_MANAGE_DETAIL:
                this.ManageDetail = {
                    data: data.body
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_CONTRIBUTION:
                this.Contribution = {
                    data: data.body
                };
                this.setContribution(this.Contribution);
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_CONTRIBUTION_DETAIL:
                this.ContributionDetail = {
                    data: data.body
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_NOTIFICATION:
                this.CompanyNotification = {
                    data: data.body
                };
                break;
        }
    }

    setComflag(compflag) {
        for (let i = 0; i < compflag.length; i++) {
            for (let j = 0; j < this.CompanyFlag.length; j++) {
                if (compflag[i] === this.CompanyFlag[j].id) {
                    this.CompanyFlag[j].status = true;
                }
            }
        }
    }

    setContribution(contribution) {
        this.ContributionLastYearTotal = 0;
        this.ContributionThisYearTotal = 0;

        this.ContributionPeriod = contribution.data.thiscontri.startYM + '-' + contribution.data.thiscontri.endYM;

        for (let i = 0; i < contribution.data.lastcontri.contribution.length; i++) {
            this.ContributionLastYearTotal = this.ContributionLastYearTotal + contribution.data.lastcontri.contribution[i];
            this.ContributionThisYearTotal = this.ContributionThisYearTotal + contribution.data.lastcontri.contribution[i];
        }

        this.ChartData = {
            chart: {
                fontFamily: '微軟正黑體',
                foreColor: '#000000',
                toolbar: {
                    show: false
                },
                height: 280,
                type: 'bar',
            },
            colors: ['#76BC21', '#009F41'],
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
            series: [
                {
                    name: '2017/12-2018/07',
                    data: [1000, 1200, 1500, 600, 300, 200]
                },
                {
                    name: '2018/12-2019/07',
                    data: [900, 1000, 1100, 700, 320, 350]
                }
            ],
            xaxis: {
                categories: contribution.data.contributionType,
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
    }
}
