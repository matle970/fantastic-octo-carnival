import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { CompanyAssociateAssets } from 'src/app/objects/dto/custinfo/custinfo-companyAssociateAssets-response';

@Injectable({
    providedIn: 'root'
})
export class PersonRelativeService {

    constructor(
        public baseservice: BaseService
    ) { }

    urlList = {
        'url': this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY_ASSOCIATE_ASSETS,
        'dtoRequset': CommonRequest,
        'dtoResponse': CompanyAssociateAssets
    };

    sendRquest() {
            this.baseservice.httpservice.sendRequestAsync(
                this.urlList.url,
                this.urlList.dtoRequset,
                this.urlList.dtoResponse).then(data => {
                    if (data.header.returnCode === '0000') {
                        // this.dataProcess(data, this.urlList[i].url);
                    }
                }, err => {
                    console.log('Error: ', err);
                });
    }

}
