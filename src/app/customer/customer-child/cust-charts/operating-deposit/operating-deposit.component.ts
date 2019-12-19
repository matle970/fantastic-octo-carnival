import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { DepositDetail } from 'src/app/objects/dto/product/product-depositDetail-response'
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';

@Component({
    selector: 'app-operating-deposit',
    templateUrl: './operating-deposit.component.html',
    styleUrls: ['./operating-deposit.component.scss']
})
export class OperatingDepositComponent extends BaseComponent implements OnInit {
    @Input() content: any;

    // 營運量-存款餘額第二層
    DepositDetail: any = {};
    sdDetail: Array<any> = [];
    tdDetail: Array<any> = [];
    cdDetail: Array<any> = [];
    ntdAssets: any = {};
    fxAssets: any = {};
    sumAssets: any = {};
    r6mthAvgBal: any = {};

    urlList = [
        {
            'url': this.URL.PRODUCT_DEPOSIT_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': DepositDetail
        }
    ];

    constructor(
        private custchartsService: CustChartsService
    ) {
        super()
    }

    async ngOnInit() {
        await this.custchartsService.sendRequest();
        this.setData();
    }

    setData() {
        this.setDepositDetailData();
    }

    SumData(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        return sum;
    }
    apiUrls: string[] = []; // 此componment需要發送的API urls
    
    setDepositDetailData() {
        this.ntdAssets = this.custchartsService._ntdAssets;
        this.fxAssets = this.custchartsService._fxAssets;
        this.sumAssets = this.custchartsService._sumAssets;
        this.r6mthAvgBal = this.custchartsService._r6mthAvgBal;

        this.sdDetail = this.custchartsService._sdDetail;
        this.tdDetail = this.custchartsService._tdDetail;
        this.cdDetail = this.custchartsService._cdDetail;
        // 存款第二層-總存款-新台幣-合計
        let sum1 = parseInt(this.ntdAssets.sd, 10) + parseInt(this.ntdAssets.td, 10) + parseInt(this.ntdAssets.cd, 10);
        this.ntdAssets.all = sum1.toString();
        // 存款第二層-總存款-外幣-合計
        let sum2 = parseInt(this.fxAssets.sd, 10) + parseInt(this.fxAssets.td, 10) + parseInt(this.fxAssets.cd, 10);
        this.fxAssets.all = sum2.toString();
        // 存款第二層-總存款-合計(新台幣)-合計
        let sum3 = parseInt(this.sumAssets.sd, 10) + parseInt(this.sumAssets.td, 10) + parseInt(this.sumAssets.cd, 10);
        this.sumAssets.all = sum3.toString();
        // 存款第二層-總存款-近6個月平均積數-合計
        let sum4 = parseInt(this.r6mthAvgBal.sd, 10) + parseInt(this.r6mthAvgBal.td, 10) + parseInt(this.r6mthAvgBal.cd, 10);
        this.r6mthAvgBal.all = sum4.toString();
        //日期轉換 20190330 return 2019/03/30
        this.tdDetail.forEach((data, index) => {
            data.acctOpenDate = this.getUtilsService().changeDateStr(data.acctOpenDate, 'yyyy/MM/dd');
            data.tdDueDate = this.getUtilsService().changeDateStr(data.tdDueDate, 'yyyy/MM/dd');
        });
    }
}