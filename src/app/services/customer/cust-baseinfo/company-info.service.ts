import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyInfoService {

    constructor(
        public baseservice: BaseService
    ) { }

}
