import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';

@Injectable({
    providedIn: 'root'
})
export class ContributionInfoService {

    constructor(
        public baseservice: BaseService
    ) { }

}
