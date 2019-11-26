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
    CompanyObj: object = {};
    // 基本資訊-公司資訊第二層
    CompanyDetailObj: object = {};
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

    sendRquest() {
        for (let i = 0; i < this.urlList.length; i++) {
            this.baseservice.httpservice.sendRequestAsync(
                this.urlList[i].url,
                this.urlList[i].dtoRequset,
                this.urlList[i].dtoResponse).then(data => {
                    // console.log('data', data);
                    if (data.header.returnCode === '0000') {
                        this.dataProcess(data, this.urlList[i].url);
                    }
                });
        }
    }

    dataProcess(data: any, url: string) {
        switch (url) {
            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY:
                this.CompanyObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_DETAIL:
                this.CompanyDetailObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_ASSOCIATE:
                this.CompanyAssociateObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_ASSOCIATE_ASSETS:
                this.CompanyAssociateAssetsObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP:
                this.GroupObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_GROUP_DETAIL:
                this.GroupDetailObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_MANAGE:
                this.ManageObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_MANAGE_DETAIL:
                this.ManageDetailObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_CONTRIBUTION:
                this.ContributionObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_CONTRIBUTION_DETAIL:
                this.ContributionDetailObj = {
                    data: data
                };
                break;

            case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_NOTIFICATION:
                this.CompanyNotificationObj = {
                    data: data
                };
                break;
        }
    }

    /**
     * jeweltest
     */
    jeweltestSendRquest() {
        for (let i = 0; i < this.urlList.length; i++) {
            this.baseservice.httpservice.sendRequestAsync(
                this.urlList[i].url,
                this.urlList[i].dtoRequset,
                this.urlList[i].dtoResponse).then(data => {
                    // console.log('data', data);
                    if (data.header.returnCode === '0000') {
                        this.dataProcess(data, this.urlList[i].url);
                    }
                });
        }
    }
}
