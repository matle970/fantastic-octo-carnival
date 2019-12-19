import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';

@Injectable({
    providedIn: 'root'
})
export class ManageInfoService {

    constructor(
        public baseservice: BaseService
    ) { }

}
