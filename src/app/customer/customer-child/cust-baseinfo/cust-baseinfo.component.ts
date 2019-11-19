import { Component, ViewChild, OnInit, OnChanges, Input } from '@angular/core';
import { ModalService } from 'src/app/common-services/modal.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../../dialog/dialog.component';
import { BaseComponent } from 'src/app/base/base.component';
import { plainToClass } from 'class-transformer';
import {
    ChartComponent,
    ApexChart,
    ApexAnnotations,
    ApexDataLabels,
    ApexAxisChartSeries,
    ApexNonAxisChartSeries,
    ApexStroke,
    ApexLegend,
    ApexFill,
    ApexPlotOptions,
    ApexTooltip,
    ApexResponsive,
    ApexXAxis,
    ApexYAxis,
    ApexGrid,
    ApexStates,
    ApexTitleSubtitle,
    ApexTheme
} from 'ng-apexcharts';
import { CommonResponse } from 'src/app/objects/dto/common/common-response';

import { Company } from 'src/app/objects/dto/custprofile/custprofile-company-response';
import { CompanyDetail } from 'src/app/objects/dto/custprofile/custprofile-companyDetail-response';
import { CompanyAssociateTotalAssets } from 'src/app/objects/dto/custprofile/custprofile-companyAssociateTotalAssets-response';
import { CompanyAssociate } from 'src/app/objects/dto/custprofile/custprofile-companyAssociate-response';
import { CompanyAssociateAssets } from 'src/app/objects/dto/custprofile/custprofile-companyAssociateAssets-response';
import { Group } from 'src/app/objects/dto/custprofile/custprofile-group-response';
import { GroupDetail } from 'src/app/objects/dto/custprofile/custprofile-groupDetail-response';
import { Manage } from 'src/app/objects/dto/custprofile/custprofile-manage-response';
import { ManageDetail } from 'src/app/objects/dto/custprofile/custprofile-manageDetail-response';
import { Contribution } from 'src/app/objects/dto/custprofile/custprofile-contribution-response';
import { ContributionDetail } from 'src/app/objects/dto/custprofile/custprofile-contributionDetail-response';
import { CompanyNotification } from 'src/app/objects/dto/custprofile/custprofile-companyNotification-response';


@Component({
    selector: 'app-cust-baseinfo',
    templateUrl: './cust-baseinfo.component.html',
    styleUrls: ['./cust-baseinfo.component.scss']
})

export class CustBaseInfoComponent extends BaseComponent implements OnInit, OnChanges {

    @Input() searchStr: string;
    @ViewChild('chartObj') chartObj: ChartComponent;

    urlList = [
        {
            'url': this.URL.CUSTPROFILE_COMPANY,
            'dtoResponse': Company
        },
        {
            'url': this.URL.CUSTPROFILE_COMPANY_DETAIL,
            'dtoResponse': CompanyDetail
        },
        {
            'url': this.URL.CUSTPROFILE_COMPANY_ASSOCIATE_TOTAL_ASSETS,
            'dtoResponse': CompanyAssociateTotalAssets
        },
        {
            'url': this.URL.CUSTPROFILE_COMPANY_ASSOCIATE,
            'dtoResponse': CompanyAssociate
        },
        {
            'url': this.URL.CUSTPROFILE_COMPANY_ASSOCIATE_ASSETS,
            'dtoResponse': CompanyAssociateAssets
        },
        {
            'url': this.URL.CUSTPROFILE_GROUP,
            'dtoResponse': Group
        },
        {
            'url': this.URL.CUSTPROFILE_GROUP_DETAIL,
            'dtoResponse': GroupDetail
        },
        {
            'url': this.URL.CUSTPROFILE_MANAGE,
            'dtoResponse': Manage
        },
        {
            'url': this.URL.CUSTPROFILE_MANAGE_DETAIL,
            'dtoResponse': ManageDetail
        },
        {
            'url': this.URL.CUSTPROFILE_CONTRIBUTION,
            'dtoResponse': Contribution
        },
        {
            'url': this.URL.CUSTPROFILE_CONTRIBUTION_DETAIL,
            'dtoResponse': ContributionDetail
        },
        {
            'url': this.URL.CUSTPROFILE_COMPANY_NOTIFICATION,
            'dtoResponse': CompanyNotification
        }
    ];

    // 基本資訊-公司資訊第一層
    CompanyObj: object = {};
    // 基本資訊-公司資訊第二層
    CompanyDetailObj: object = {};
    // 基本資訊-個人關聯戶第一層
    CompanyAssociateTotalAssetsObj: object = {};
    // 基本資訊-個人關聯戶第二層(關聯戶基本資訊)
    CompanyAssociateObj: object = {};
    // 基本資訊-個人關聯戶第二層(客戶資產負債)
    CompanyAssociateAssetsObj: object = {};
    // 基本資訊-集團資訊第一層
    GroupObj: object = {};
    // 基本資訊-集團資訊第二層
    GroupDetailObj: object = {};
    // 基本資訊-經管資訊第一層
    ManageObj: object = {};
    // 基本資訊-經管資訊第二層
    ManageDetailObj: object = {};
    // 基本資訊-貢獻度第一層
    ContributionObj: object = {};
    // 基本資訊-貢獻度第二層
    ContributionDetailObj: object = {};
    // 基本資訊-訊息通知
    CompanyNotificationObj: object = {};


    ngOnInit() {
        // this.sendRquest();
        console.log('baseinfo',this)
    }

    sendRquest() {
        for (let i = 0; i < this.urlList.length; i++) {
            super.sendRequestAsync(this.urlList[i].url, this.urlList[i].dtoResponse).then((data: any) => {
                console.log('data', data);
                // if (data.header.returnCode === '0000') {
                //     this.dataProcess(data, this.urlList[i].url);
                // }
            }, (err) => {

            });
        }
    }

    dataProcess(data: any, url: string) {
        switch (url) {
            case this.URL.CUSTPROFILE_COMPANY:
                this.CompanyObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_COMPANY_DETAIL:
                this.CompanyDetailObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_COMPANY_ASSOCIATE_TOTAL_ASSETS:
                this.CompanyAssociateTotalAssetsObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_COMPANY_ASSOCIATE:
                this.CompanyAssociateObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_COMPANY_ASSOCIATE_ASSETS:
                this.CompanyAssociateAssetsObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_GROUP:
                this.GroupObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_GROUP_DETAIL:
                this.GroupDetailObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_MANAGE:
                this.ManageObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_MANAGE_DETAIL:
                this.ManageDetailObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_CONTRIBUTION:
                this.ContributionObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_CONTRIBUTION_DETAIL:
                this.ContributionDetailObj = {
                    data: data
                };
                break;

            case this.URL.CUSTPROFILE_COMPANY_NOTIFICATION:
                this.CompanyNotificationObj = {
                    data: data
                };
                break;
        }
    }
















    apiUrls: string[] = []; // 此componment需要發送的API urls

    lastcontriPeriod: string; // 貢獻度, 去年區間
    thiscontriPeriod: string; // 貢獻度, 今年區間
    contributionPeriod: string; // 貢獻度, 資料區間
    contributionLastYearTotal: number; // 貢獻度去年累計
    contributionThisYearTotal: number; // 貢獻度去年累計
    // contributionObj: any; // 貢獻度的資料 for dialog
    contributionText = this.TEXT.contribution;

    // 圖表資訊
    chartData = {
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
            categories: this.contributionText,
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

    // 公司資料的假資料
    company_info = {
        date: '2019/06/18',
        company_name: '千里馬股份有限公司',
        data_list: [
            {
                id: 'c01',
                name: '股票代號',
                content: '0730',
                infos: [],
                tags: []
            },
            {
                id: 'c02',
                name: '資本額',
                content: '180000000',
                infos: [],
                tags: []
            },
            {
                id: 'c03',
                name: '實收資本額',
                content: '138629906',
                infos: [],
                tags: []
            },
            {
                id: 'c04',
                name: '核准設立日期',
                content: '1974/02/20',
                infos: [],
                tags: []
            },
            {
                id: 'c05',
                name: '董事長',
                content: '李宛靜',
                infos: [],
                tags: []
            },
            {
                id: 'c06',
                name: '註冊地址',
                content: '新北市土城區中山路66號',
                infos: [],
                tags: [],
                activeMap: false
            },
            {
                id: 'c07',
                name: '主要營業地址',
                content: '新北市土城區中山路66號',
                infos: [],
                tags: [],
                activeMap: false
            },
            {
                id: 'c08',
                name: '公司地址',
                content: '新北市土城區中山路66號',
                infos: [],
                tags: [],
                activeMap: true
            },

            {
                id: 'c09',
                name: '負責人',
                content: '林金霖',
                infos: [" 6 月壽星", "AUM 9,612"],
                tags: [1, 2, 3, 4, 5, 6],
                travel: [
                    {
                        code: 'ca',
                        name: '加拿大'
                    },
                    {
                        code: 'th',
                        name: '菲律賓'
                    }

                ]
            },
            {
                id: 'c10',
                name: '負責人配偶',
                content: '王弈',
                infos: [" 26 歲", "5 月壽星", "AUM 1,485"],
                tags: [7, 8, 9, 10, 11],
                travel: [
                    {
                        code: 'kr',
                        name: '首爾'
                    },
                    {
                        code: 'no',
                        name: '挪威'
                    },
                    {
                        code: 'it',
                        name: '義大利'
                    },
                    {
                        code: 'jp',
                        name: '日本'
                    },
                    {
                        code: 'au',
                        name: '澳洲'
                    },
                ]
            },
            {
                id: 'c11',
                name: '聯絡窗口 1',
                content: '財務長 徐以威',
                infos: ["02 8722 6666 #7169"]
            },
            {
                id: 'c12',
                name: '聯絡窗口 2',
                content: '經辦小姐 尤昕寧',
                infos: ["02 8722 6666 #7155"]
            },
        ]
    }

    //集團資訊的假資料
    group_info = {
        date: '2019/08/06',
        company_name: '德魯納集團',
        data_list: []
    }


    constructor(
        private modalService: ModalService,
        public dialog: MatDialog) {
        super();
    }


    // ngOnInit() {
    //     // // const myChart = this.chartObj;
    //     // this.getBaseInfoApiUrls();
    //     // const request = this.prepareBaseInfoApiRequest(this.apiUrls, this.getShareDataService().getCustomerProfileParam()); // 取得所有需要發送的API urls
    //     // // if (this.getShareDataService().getCacheData(this.URL.companyBaseInfo) === undefined) {
    //     // if (!this.getShareDataService().checkIfGetCatcheDataByArry(this.apiUrls)) {
    //     //   console.log('Get 基本資訊By API');
    //     //   this.getBaseInfoData(request); // 取得資料ByAPI
    //     // } else {
    //     //   console.log('Get 基本資訊By Cache');
    //     //   request.forEach((value: string) => {
    //     //     this.setBaseInfo(value['url'], this.getShareDataService().getCacheData(value['url']));
    //     //   });
    //     // }
    // }


    ngOnChanges() {
        if (this.searchStr !== undefined && this.searchStr !== '') {
            console.log(this.searchStr);
            this.getShareDataService().customerId = this.searchStr;
            // tslint:disable-next-line: max-line-length
            this.getBaseInfoData(this.prepareBaseInfoApiRequest(this.apiUrls, this.getShareDataService().getCustomerProfileParam())); // 取得資料ByAPI
        }
    }



    /**
     * 暫用此方法寫
     * @param modalId 開啟modal的方式
     */
    openDialog(modalId: number, wide?: boolean) {
        const openId = modalId ? modalId : 3;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            id: openId,
            title: '',
            content_data: {}
        };

        if (wide) {
            dialogConfig.panelClass = 'open-table-wide';
        } else {
            dialogConfig.panelClass = 'open-table-narrow';
        }

        switch (openId) {
            case 3:
                dialogConfig.data.content_data = this.company_info;
                dialogConfig.data.title = '公司資訊';
                break;
            case 4:
                dialogConfig.data.content_data = this.group_info;
                dialogConfig.data.title = '集團資訊';
                break;
            case 5:
                dialogConfig.data.content_data = [];
                dialogConfig.data.title = '個人關聯戶';
                break;
            case 6:
                dialogConfig.data.content_data = [];
                dialogConfig.data.title = '經管資訊';
                break;
            case 7:
                dialogConfig.data.content_data = this.ContributionObj;
                dialogConfig.data.title = '貢獻度';
                break;

            default:
                dialogConfig.data.content_data = this.company_info;
                dialogConfig.data.title = '公司資訊';
                break;


        }

        this.dialog.open(DialogComponent, dialogConfig);
    }

    /**
     * 之後有時間再詳寫此功能
     * @param mid
     */
    openModal(mid: string) {
        this.modalService.openModal(mid);

    }

    /*******************
     * 取得基本資訊所有的API Urls
     * @param param : api所需的參數值
     ********************/
    getBaseInfoApiUrls() {
        const urls = this.URL.customerProfile.Layer1;
        Object.keys(urls).forEach(value => {
            console.log(urls[value]);
            this.apiUrls.push(urls[value]);
        });
    }

    /*******************
     * 準備發送的API request Obj
     * {'url': string, 'param': param}
     * @param param : api所需的參數值
     ********************/
    prepareBaseInfoApiRequest(urls: string[], param: any) {

        const requestParam = [];
        urls.forEach(value => {
            requestParam.push({ 'url': value, 'param': param });
        });
        return requestParam;
    }

    /*******************
     * 發送API取得基本資料
     * *****************/
    getBaseInfoData(request: any) {
        request.forEach(value => {
            this.getRequestData(value.url, value.param).then((response: any) => {
                this.setBaseInfo(value.url, plainToClass(CommonResponse, response));
            }).catch((error: any) => {
                console.log('error' + error);
            });
        });
    }

    /*******************
     * 依各個 URL 塞各自的資料
     * *****************/
    setBaseInfo(url: string, response: any) {
        console.log(response);
        const status = response.header.returnCode;
        const data = response.body;
        if (status === '0000') {
            switch (url) {
                case this.URL.customerProfile.Layer1.getCBCompany:
                    console.log('公司資訊');
                    break;
                case this.URL.customerProfile.Layer1.getCBGroup:
                    console.log('集團資訊');
                    break;
                case this.URL.customerProfile.Layer1.getCBManage:
                    console.log('經管資訊');
                    break;
                case this.URL.customerProfile.Layer1.getCBContribution:
                    console.log('貢獻度');
                    this.setContributionData(data);
                    break;
                default:
                    console.log('url not found');
                    break;
            }
        }
    }

    // 塞貢獻度資料
    setContributionData(data: any) {
        // 取得貢獻度資料, 每個值存成arry & 圖表標頭 & 更新圖表
        const lastYear: number[] = [];
        const thisYear: number[] = [];
        for (let i = 1; i < 7; i++) {
            lastYear.push(super.getUtilsService().removeCommafy(data.lastcontri['profittype' + i]));
            thisYear.push(super.getUtilsService().removeCommafy(data.thiscontri['profittype' + i]));
        }
        console.log(lastYear);
        console.log(thisYear);

        this.chartData.series[0]['data'] = lastYear;
        this.chartData.series[1]['data'] = thisYear;

        const lastYearStart = super.getUtilsService().changeDateStr(data.lastcontri.startym, 'yyyy/MM');
        const lastYearEnd = super.getUtilsService().changeDateStr(data.lastcontri.endym, 'yyyy/MM');
        const thisYearStart = super.getUtilsService().changeDateStr(data.thiscontri.startym, 'yyyy/MM');
        const thisYearEnd = super.getUtilsService().changeDateStr(data.thiscontri.endym, 'yyyy/MM');

        const lastYearPeriod = lastYearStart + '-' + lastYearEnd;
        const thisYearPeriod = thisYearStart + '-' + thisYearEnd;

        this.chartData.series[0]['name'] = lastYearPeriod;
        this.chartData.series[1]['name'] = thisYearPeriod;

        this.chartObj.destroy();
        this.chartObj.render();

        // 去年度 &今年度 加總(取得總值後再加千分位 & $字符號)
        this.contributionLastYearTotal = super.getUtilsService().commafy(super.getUtilsService().getSumByArry(lastYear), true);
        this.contributionThisYearTotal = super.getUtilsService().commafy(super.getUtilsService().getSumByArry(thisYear), true);
        this.contributionPeriod = lastYearStart + '-' + thisYearEnd; // 貢獻度資料區間

        this.ContributionObj = {
            'lastYear': {
                'text': '去年度累計貢獻度',
                'period': lastYearPeriod, // 去年度區間
                'data': this.chartData.series[0]['data'], // 去年度資料
            },
            'thisYear': {
                'text': '今年度累計貢獻度',
                'period': thisYearPeriod, // 今年度區間
                'data': this.chartData.series[1]['data'], // 今年度資料
            },
            'contributionPeriod': this.contributionPeriod, // 資料區間
        };
    }

}
