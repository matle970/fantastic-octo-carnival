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
    DepositDetailObj: any = {};
    sdDetail: any[];
    tdDetail: any[];
    cdDetail: any[];
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
        private custchartsService: CustChartsService,
    ) {
        super()
    }

    async ngOnInit() {
        await this.custchartsService.sendRequest();
        this.setData();
    }

    setData() {
        this.DepositDetailObj = this.custchartsService.DepositDetailObj;

        this.ntdAssets = this.DepositDetailObj.data.body.assets.ntdAssets;
        this.fxAssets = this.DepositDetailObj.data.body.assets.fxAssets
        this.sumAssets = this.DepositDetailObj.data.body.assets.sumAssets;
        this.r6mthAvgBal = this.DepositDetailObj.data.body.assets.r6mthAvgBal;


        this.sdDetail = this.DepositDetailObj.data.body.sdDetail;
        this.cdDetail = this.DepositDetailObj.data.body.cdDetail;
        this.tdDetail = this.DepositDetailObj.data.body.tdDetail;

        // 存款第二層-總存款-新台幣-合計
        let sum1 = parseInt(this.ntdAssets.sd, 10) + parseInt(this.ntdAssets.td, 10) + parseInt(this.ntdAssets.cd, 10);
        this.ntdAssets.all = sum1.toString();
        // console.log('xx', sum1);
        // console.log('xxx', typeof this.ntdAssets.all);

        // 存款第二層-總存款-外幣-合計
        let sum2 = parseInt(this.fxAssets.sd, 10) + parseInt(this.fxAssets.td, 10) + parseInt(this.fxAssets.cd, 10);
        this.fxAssets.all = sum2.toString();

        // 存款第二層-總存款-合計(新台幣)-合計
        let sum3 = parseInt(this.sumAssets.sd, 10) + parseInt(this.sumAssets.td, 10) + parseInt(this.sumAssets.cd, 10);
        this.sumAssets.all = sum3.toString();

        // 存款第二層-總存款-合計(新台幣)-近6個月平均積數
        let sum4 = parseInt(this.r6mthAvgBal.sd, 10) + parseInt(this.r6mthAvgBal.td, 10) + parseInt(this.r6mthAvgBal.cd, 10);
        this.r6mthAvgBal.all = sum4.toString();


        //日期轉換 20190330 return 2019/03/30
        this.tdDetail.forEach((data, index) => {
            data.acctOpenDate = this.getUtilsService().changeDateStr(data.acctOpenDate, 'yyyy/MM/dd');
            data.tdDueDate = this.getUtilsService().changeDateStr(data.tdDueDate, 'yyyy/MM/dd');
        });

    }

    SumData(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        return sum;
    }
    apiUrls: string[] = []; // 此componment需要發送的API urls
    // depositDetailTitle = this.TITLE.depositDetail;

}





