import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { plainToClass } from 'class-transformer';
import { ShareDataService } from 'src/app/services/share-data.service';
import { EnvService } from '../../environments/env.service';

/*******************
 * 發送Http的Service
 **********************/
@Injectable({ providedIn: 'root' })
export class HttpService {
    // URLs
    URL = require('src/app/objects/url/url.json');

    constructor(
        private httpClient: HttpClient,
        private shareData: ShareDataService,
        private env: EnvService
    ) { }

    apiDomain: string = this.env.apiUrl; // API Domain name

    /******************
     * Send by post
     * ****************/
    sendHttpByPost(url: string, rs: any, param: object): Promise<{}> {
        return new Promise<{}>((resolve) => {
            // console.log('this.apiDomain', this.apiDomain);
            this.httpClient.post<any>(this.apiDomain + url, param).toPromise().then((value: any) => {
                resolve(plainToClass(rs, value)); // 回傳的資料轉回需要的response object
                this.shareData.setCacheData(url, plainToClass(rs, value)); // 儲存 Data資料
            });
        });
    }

}
