import { Injectable } from '@angular/core';
import { CompanyResponse } from 'src/app/objects/dto/custinfo/custinfo-company-response';
import { CompanyDetailResponse } from 'src/app/objects/dto/custinfo/custinfo-companyDetail-response';
import { CompanyAssociate } from 'src/app/objects/dto/custinfo/custinfo-companyAssociate-response';
import { CompanyAssociateAssets } from 'src/app/objects/dto/custinfo/custinfo-companyAssociateAssets-response';
import { GroupResponse } from 'src/app/objects/dto/custinfo/custinfo-group-response';
import { GroupDetailRequest } from 'src/app/objects/dto/custinfo/custinfo-groupDetail-request';
import { GroupDetailResponse } from 'src/app/objects/dto/custinfo/custinfo-groupDetail-response';
import { ManageDetailResponse } from 'src/app/objects/dto/custinfo/custinfo-manageDetail-response';
import { ContributionResponse } from 'src/app/objects/dto/custinfo/custinfo-contribution-response';
import { CompanyNotification } from 'src/app/objects/dto/custinfo/custinfo-companyNotification-response';
import { BaseService } from 'src/app/services/common-services/base/base.service';
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
    companyinfo_text: string = this.text.companyinfo_text;
    manageinfo_text: string = this.text.manageinfo_text;
    groupinfo_text: string = this.text.groupinfo_text;
    personal_account_text: string = this.text.personal_account_text;
    contribution_text: string = this.text.contribution_text;

    urlList = [
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY,
            'dtoRequset': CommonRequest,
            'dtoResponse': CompanyResponse
        },
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': CompanyDetailResponse
        },
        // {
        //     'url': this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_ASSOCIATE,
        //     'dtoRequset': CommonRequest,
        //     'dtoResponse': CompanyAssociate
        // },
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP,
            'dtoRequset': CommonRequest,
            'dtoResponse': GroupResponse
        },
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP_DETAIL,
            'dtoRequset': GroupDetailRequest,
            'dtoResponse': GroupDetailResponse
        },
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_MANAGE_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': ManageDetailResponse
        },
        {
            'url': this.baseservice.geturlservice.URL.CUSTPROFILE_CONTRIBUTION,
            'dtoRequset': CommonRequest,
            'dtoResponse': ContributionResponse
        },
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
    // 基本資訊-集團資訊第一層
    Group: any = {};
    // 基本資訊-集團資訊第二層
    GroupDetail: any = {};
    // 基本資訊-經管資訊第二層
    ManageDetail: any = {};
    // 基本資訊-貢獻度第一層
    Contribution: any = {};
    // 基本資訊-訊息通知
    CompanyNotification: any = {};

    // 授網薪集黑
    CompanyFlag: Array<any> = [
        { id: "授信戶", text: this.text.tag_green_text, letter: this.text.tag_green_letter, status: false },
        { id: "企網銀", text: this.text.tag_blue_text, letter: this.text.tag_blue_letter, status: false },
        { id: "薪轉戶", text: this.text.tag_gold_text, letter: this.text.tag_gold_letter, status: false },
        { id: "集團核心", text: this.text.tag_orange_text, letter: this.text.tag_orange_letter, status: false },
        { id: "黑名單", text: this.text.tag_red_text, letter: this.text.tag_red_letter, status: false }
    ];

    // 集團資訊-集團總額度
    sumfacdFxLimitAmt: number = 0;
    // 集團資訊-集團總餘額    
    sumLbFxCurrentBal: number = 0;

    // 貢獻度去年累計
    ContributionLastYearTotal: number;
    // 貢獻度去年累計
    ContributionThisYearTotal: number;
    ChartDataseries: Array<any> = [];
    ChartDatacategories: Array<any> = [];


    async sendRquest() {
        for (let i = 0; i < this.urlList.length; i++) {
            let data = await this.baseservice.httpservice.sendRequestAsync(
                this.urlList[i].url,
                this.urlList[i].dtoRequset,
                this.urlList[i].dtoResponse);
            if (data.header.returnCode === '0000') {
                this.dataProcess(data, this.urlList[i].url);
            }
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

            case this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP:
                this.Group = {
                    data: data.body
                };
                this.baseservice.customerIdservice.parentCompanyId = data.body.parentCompanyId;
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP_DETAIL:
                this.GroupDetail = {
                    data: data.body
                };
                this.setGroupDetail(this.GroupDetail);
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

    setGroupDetail(groupdetail) {
        for (let i = 0; i < groupdetail.data.groupMemberLoanInfo.length; i++) {
            this.sumLbFxCurrentBal = this.sumLbFxCurrentBal + groupdetail.data.groupMemberLoanInfo[i].sumLbFxCurrentBal;
            this.sumfacdFxLimitAmt = this.sumfacdFxLimitAmt + groupdetail.data.groupMemberLoanInfo[i].sumfacdFxLimitAmt;
        }
    }

    setContribution(contribution) {
        this.ContributionLastYearTotal = 0;
        this.ContributionThisYearTotal = 0;

        for (let i = 0; i < contribution.data.lastcontri.contribution.length; i++) {
            this.ContributionLastYearTotal = this.ContributionLastYearTotal + contribution.data.lastcontri.contribution[i];
            this.ContributionThisYearTotal = this.ContributionThisYearTotal + contribution.data.thiscontri.contribution[i];
        }

        this.ChartDatacategories = contribution.data.contributionType;
        let sysdate = new Date();
        this.ChartDataseries = [
            {
                name:
                    String(sysdate.getFullYear() - 2) + '/' + '12' + '~' +
                    String(sysdate.getFullYear() - 1) + '/' + '11',
                data: contribution.data.lastcontri.contribution
            },
            {
                name:
                    String(sysdate.getFullYear() - 1) + '/' + '12' + '~' +
                    String(sysdate.getFullYear()) + '/' + String(sysdate.getMonth() + 1 - 1),
                data: contribution.data.thiscontri.contribution
            }
        ];
    }

    openDialog(modalId: number, wide?: boolean) {
        let title: string;
        let data: object;
        switch (modalId) {
            case 3:
                title = this.companyinfo_text;
                data = this.CompanyDetail.data;
                break;
            case 4:
                title = this.groupinfo_text;
                data = this.GroupDetail.data;
                break;
            case 5:
                title = this.personal_account_text;
                data = this.CompanyAssociate.data;
                break;
            case 6:
                title = this.manageinfo_text;
                data = this.ManageDetail.data;
                break;
            case 7:
                title = this.contribution_text;
                data = this.Contribution.data;
                break;
        }

        this.baseservice.dialogservice.openDialog(modalId, wide, title, data);
    }
}
