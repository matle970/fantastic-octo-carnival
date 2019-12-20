import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';

@Injectable({
    providedIn: 'root'
})
export class GroupInfoService {

    constructor(
        public baseservice: BaseService
    ) { }

}
