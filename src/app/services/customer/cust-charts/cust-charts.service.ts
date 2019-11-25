import { Injectable } from '@angular/core';
import { BaseService } from '../../common-services/base/base.service';
import { AssetsLibilities } from 'src/app/objects/dto/product/product-assetsLibilities-response';
import { ReadyState } from '@angular/http';
import { CustChartsComponent } from 'src/app/customer/customer-child/cust-charts/cust-charts.component';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { CustomerIdService } from '../../common-services/customerid.service';
import { of } from 'rxjs';
import { DepositDetail } from 'src/app/objects/dto/product/product-depositDetail-response';
import { LoanDetail } from 'src/app/objects/dto/product/product-loanDetail-response';
import { ImportExportDetail } from 'src/app/objects/dto/product/product-importExportDetail-response';
import { TMUDetail } from 'src/app/objects/dto/product/product-tmuDetail-response';


@Injectable({
    providedIn: 'root'
})
export class CustChartsService {

    constructor(
        private baseservice: BaseService,
        private customerInfo: CustomerIdService
    ) { }

    urlList = [
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_ASSETS_LIBILITIES,
            'dtoRequest':CommonRequest,
            'dtoResponse': AssetsLibilities
        },
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_DEPOSIT_DETAIL,
            'dtoRequest':CommonRequest,
            'dtoResponse': DepositDetail
        },
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_LOAN_DETAIL,
            'dtoRequest':CommonRequest,
            'dtoResponse': LoanDetail
        },
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_IMPORT_EXPORT_DETAIL,
            'dtoRequest':CommonRequest,
            'dtoResponse': ImportExportDetail
        },
        {
            'url': this.baseservice.geturlservice.URL.PRODUCT_TMU_DETAIL,
            'dtoRequest':CommonRequest,
            'dtoResponse': TMUDetail
        }

    ];

    

   

    // 營運量-營運量第一層
    AssetsLibilitiesObj: object = {};
    // 營運量-存款餘額第二層
    DepositDetailObj: object = {};
    // 營運量-放款餘額第二層
    LoanDetailObj: object = {};
    // 營運量-進出口實績第二層
    ImportExportDetailObj: object = {};
    // 營運量-TMU額度第二層
    TMUDetailObj: object = {};

    sendRequest() {
        for (let i = 0; i < this.urlList.length; i++) {
            this.baseservice.httpservice.sendRequestAsync(
                this.urlList[i].url,
                this.urlList[i].dtoRequest, 
                this.urlList[i].dtoResponse).then((data: any) => {
                // console.log('data', data)
                if (data.header.returnCode === '0000') {
                    this.dataProcess(data, this.urlList[i].url);
                



            // this.DepositData.series[0].data = data.body[0].depositBal;
            // this.DepositData.xaxis.categories = this.getDataMonth(data.body[0].depositMon);

            // this.LoanData.series[0].data = data.body[0].loanBal;
            // this.LoanData.xaxis.categories = this.getDataMonth(data.body[0].loanMon);
            // this.LoanData.series[1].data = data.body[0].tradeFinanceBal;

            // this.TradeData.series[0].data = data.body[0].importAmt;
            // this.TradeData.xaxis.categories = this.getDataMonth(data.body[0].importMon);
            // this.TradeData.series[1].data = data.body[0].exportAmt;

            // this.TmuData.series[0].data = data.body[0].tmuUsage;
            // this.TmuData.xaxis.categories = this.getDataMonth(data.body[0].tmuMon);
            // this.TmuData.series[1].data = data.body[0].mtmUsage;

        }

        });
    }
}

dataProcess(data: any,url:string){
    switch(url){
        case this.baseservice.geturlservice.URL.PRODUCT_ASSETS_LIBILITIES:
             this.AssetsLibilitiesObj = {
                data:data
            };
            break;
        
        case this.baseservice.geturlservice.URL.PRODUCT_DEPOSIT_DETAIL:
            this.DepositDetailObj = {
                data:data
            };
        case this.baseservice.geturlservice.URL.PRODUCT_LOAN_DETAIL:
            this.LoanDetailObj = {
                data:data
            };
        case this.baseservice.geturlservice.URL.PRODUCT_IMPORT_EXPORT_DETAIL:
            this.ImportExportDetailObj = {
                data:data
            };
        case this.baseservice.geturlservice.URL.CUSTPROFILE_COMPANY:
            this.TMUDetailObj = {
                data:data
            };
    }
}

// getAssetsLibilitiesObj() {
//     // return of(this.AssetsLibilitiesObj)
//     return (this.dataProcess);
// }

}
