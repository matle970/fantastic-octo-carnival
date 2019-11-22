import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';
import { AssetsLibilities } from 'src/app/objects/dto/product/product-assetsLibilities-response';
import { ReadyState } from '@angular/http';
import { CustChartsComponent } from 'src/app/customer/customer-child/cust-charts/cust-charts.component';

@Injectable({
    providedIn: 'root'
})
export class CustChartsService {

    constructor(
        private baseservice: BaseService
    ) { }

    urlList = [
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_ASSETS_LIBILITIES,
            'dtoResponse': AssetsLibilities
        }
    ];

    // 營運量-營運量第一層
    AssetsLibilitiesObj = {};
    // 營運量-存款餘額第二層
    DepositDetailObj = {};
    // 營運量-放款餘額第二層
    LoanDetailObj = {};
    // 營運量-進出口實績第二層
    ImportExportDetailObj = {};
    // 營運量-TMU額度第二層
    TMUDetailObj = {};

    sendRequest() {
        for (let i = 0; i < this.urlList.length; i++) {
            this.baseservice.httpservice.sendRequestAsync(this.urlList[i].url, this.urlList[i].dtoResponse).then((resdata: any) => {
                console.log('data', resdata)
                // if (resdata.header.returnCode === '0000') {
                //     this.dataProcess(resdata, this.urlList[i].url);
                



            // this.DepositData.series[0].data = resdata.body[0].depositBal;
            // this.DepositData.xaxis.categories = this.getDataMonth(resdata.body[0].depositMon);

            // this.LoanData.series[0].data = resdata.body[0].loanBal;
            // this.LoanData.xaxis.categories = this.getDataMonth(resdata.body[0].loanMon);
            // this.LoanData.series[1].data = resdata.body[0].tradeFinanceBal;

            // this.TradeData.series[0].data = resdata.body[0].importAmt;
            // this.TradeData.xaxis.categories = this.getDataMonth(resdata.body[0].importMon);
            // this.TradeData.series[1].data = resdata.body[0].exportAmt;

            // this.TmuData.series[0].data = resdata.body[0].tmuUsage;
            // this.TmuData.xaxis.categories = this.getDataMonth(resdata.body[0].tmuMon);
            // this.TmuData.series[1].data = resdata.body[0].mtmUsage;

        }, (err) => {

        });
    }
}

// dataProcess(resdata: any,url:string){
//     switch(url){
//         case this.baseservice.geturlservice.URL.PRODUCT_ASSETS_LIBILITIES:
//              this.AssetsLibilitiesObj = {
//                 data:resdata
//             };
//             break;
//     }
// }

}
