import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { plainToClass } from 'class-transformer';
import { environment } from 'src/environments/environment';
import { ShareDataService } from 'src/app/services/share-data.service';

/*******************
 * 發送Http的Service
 **********************/
@Injectable({providedIn: 'root'})
export class HttpService {

  apiDomain: string = environment.apiUrl; // API Domain name

  constructor(private httpClient: HttpClient, private shareData: ShareDataService) { }

  /******************
   * Send by post
   * ****************/
  sendHttpByPost(url: string, rs: any, param: object): Promise<{}> {
    console.log('HttpService Request By POST:' + url + ',param: ', param);
    return new Promise<{}>((resolve) => {
      this.httpClient.post<any>(this.apiDomain + url, param).toPromise().then((value: any) => {
        resolve(plainToClass(rs, value)); // 回傳的資料轉回需要的response object
        this.shareData.setCacheData(url, plainToClass(rs, value)); // 儲存 Data資料
      });
    });
  }

}
