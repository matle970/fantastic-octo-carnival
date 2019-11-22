import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base/base.service';
import { WMBranchResponse } from 'src/app/objects/dto/firstpage/firstpage-wmBranch-response';
import { ReferBranchResponse } from 'src/app/objects/dto/firstpage/firstpage-referBranch-response';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
    _wmBranchList;
    _referBranchList;
    urlList = [{
        'url': this.baseService.geturlservice.URL.FIRSTPAGE_WM_BRANCH_LSIT,
        'dtoResponse': WMBranchResponse
    },{
        'url': this.baseService.geturlservice.URL.FIRSTPAGE_REFER_BRANCH_LIST,
        'dtoResponse': ReferBranchResponse
    }];
    constructor(private baseService: BaseService) { }

    sendWMBranchRequest() {
        this.baseService.httpservice.sendRequestAsync(this.urlList[0].url, this.urlList[0].dtoResponse).then((data: any) => {
            this._wmBranchList = data.body.branch;
            //console.log('list', this._wmBranchList);
        }, (err) => { })
    };
    sendReferBranchRequest() {
        this.baseService.httpservice.sendRequestAsync(this.urlList[1].url, this.urlList[1].dtoResponse).then((data: any) => {
            this._referBranchList = data.body.branch;
            //console.log('list', this._referBranchList);
        }, (err) => { })
    };

    get wmBranchList() {
        return this._wmBranchList;
    }

    get referBranchList() {
        return this._referBranchList;
    }
}
