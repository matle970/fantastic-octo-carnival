import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base/base.service';
import { WMBranchResponse } from 'src/app/objects/dto/firstpage/firstpage-wmBranch-response';
import { ReferBranchResponse } from 'src/app/objects/dto/firstpage/firstpage-referBranch-response';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
    urlList = [{
        'url': this.baseSerivce.geturlservice.URL.FIRSTPAGE_WM_BRANCH_LSIT,
        'dtoResponse': WMBranchResponse
    },{
        'url': this.baseSerivce.geturlservice.URL.FIRSTPAGE_REFER_BRANCH_LIST,
        'dtoResponse': ReferBranchResponse
    }];
    constructor(private baseSerivce: BaseService) { }
}
