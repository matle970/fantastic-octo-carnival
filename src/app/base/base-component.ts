import { CommonRequest } from 'src/app/objects/dto/common-request';
import { CommonResponse } from 'src/app/objects/dto/common-response';
import { HttpService } from 'src/app/objects/services/http.service';
import { InjectService } from 'src/app/objects/services/inject.service';
import { ShareDataService } from 'src/app/objects/services/share-data.service';
import { UtilsService } from 'src/app/objects/services/utils.service';

/****************************
 * 所有元件的共通設定
 * 1. 將其他service注入至此元件，繼承此元件的可經由function取得service
 * 2. getRequestData 發送API取得資料的入口
 * **************************/
export class BaseComponent {
    URL = require('src/app/objects/url/url.json'); // URLs
    TITLE = require('src/app/objects/text/title.json'); // 各種title

    getRequestData(url: string, param?: any) {
        const request = this.setApiData(param); // 設定Request的header & body
        return this.sendAPI(url, CommonResponse, request); // 發送API
    }

    /**
     * 設定 Request 的 Header & Body
     * @param param Request的參數值放至body
     */
    setApiData(param?: any) {
        const request = new CommonRequest();
        request.header = this.getShareDataService().getHeaderData();
        request.body = param;
        return request;
    }

    /**
     * Api 發送
     * @param url 發送URL
     * @param sendType 發送方式(POST / GET_PARAM - GET withoutParam / GET_NO_PARAM- GET with Params)
     * @param response 收到的Response
     * @param param Request的參數值(非必要)
     */
    sendAPI<T>(url: string, response: T, param?: any) {
        return this.getHttpService().sendHttpByPost(url, response, param);
    }

    /*******************
     * Get service
     * *****************/
    /* httpClient */
    getHttpService(): HttpService {
        return InjectService.injector.get(HttpService);
    }
    /* CacheData */
    getShareDataService(): ShareDataService {
        return InjectService.injector.get(ShareDataService);
    }
    /* Utils */
    getUtilsService(): UtilsService {
        return InjectService.injector.get(UtilsService);
      }

}
