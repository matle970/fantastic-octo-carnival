import { Injectable } from '@angular/core';
import { DummyData } from 'src/localServer/dummy-data';
import { CommonResponse } from 'src/app/objects/dto/common/common-response';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { HttpService } from '../http.service';
import { InjectService } from '../inject.service';
import { ShareDataService } from '../share-data.service';
import { UtilsService } from '../utils.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

      // 是否使用 Dummy data
      useDummyData = true;

      // URLs
      URL = require('src/app/objects/url/url.json');
      // text
      TEXT = require('src/app/objects/text/text.json');
  
      /**
      * 使用promise方式非同步發送請求
      * @param url 查詢URL
      * @param dtoResponse 回傳response
      * @param useDummyData 是否使用 Dummy data
      */
      sendRequestAsync(url: string, dtoResponse: any): Promise<any> {
          let data: any;
  
          if (this.useDummyData) {
              const dummy = new DummyData();
              data = dummy.getDummyData(url, dtoResponse);
              // return data;
              return new Promise((resolve, reject) => {
                  resolve(this.returnData(data));
                  reject();
              });
          } else {
              return new Promise((resolve, reject) => {
                  resolve(this.sendAPI(url, dtoResponse));
                  reject();
              });
          }
      }
  
      returnData(data: string) {
          return data;
      }
  
      /**
       * Api 發送
       * @param url 發送URL
       * @param sendType 發送方式(POST / GET_PARAM - GET withoutParam / GET_NO_PARAM- GET with Params)
       * @param dtoResponse 收到的Response
       * @param param Request的參數值(非必要)
       */
      sendAPI(url: string, dtoResponse: any, param?: any) {
          return this.getHttpService().sendHttpByPost(url, dtoResponse, param);
      }
  
  
      getRequestData(url: string, param?: any) {
          const request = this.setApiData(param); // 設定Request的header & body
          return this.sendAPI(url, CommonResponse, request); // 發送API
      }
  
      /**
       * 設定 Request 的 Header & body
       * @param param Request的參數值放至body
       */
      setApiData(param?: any) {
          const request = new CommonRequest();
          request.header = this.getShareDataService().getHeaderData();
          request.body = param;
          return request;
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
