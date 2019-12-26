import { Component, OnInit, Input } from '@angular/core';
import { DepositDetail } from 'src/app/objects/dto/product/product-depositDetail-response'
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';
import { UtilsService } from 'src/app/services/common-services/utils.service';

@Component({
    selector: 'app-operating-deposit',
    templateUrl: './operating-deposit.component.html',
    styleUrls: ['./operating-deposit.component.scss']
})
export class OperatingDepositComponent implements OnInit {
    @Input() content: any;

    //營運量第二層-存款 html text
    text = this.custchartsService.baseservice.gettextservice.custchartstext;
    deposit_text: string = this.text.deposit_text;
    assets_text: string = this.text.assets_text;
    currencyCode_text: string = this.text.currencyCode_text;

    // 營運量-存款餘額第二層
    DepositDetail: any = {};
    sdDetail: Array<any> = [];
    tdDetail: Array<any> = [];
    cdDetail: Array<any> = [];
    ntdAssets: any = {};
    fxAssets: any = {};
    sumAssets: any = {};
    r6mthAvgBal: any = {};

    public loadingStatus: boolean = true;
    public statusCode: boolean;
    public hideBlock: boolean;
    public hasResult: boolean;
    public nodata: string;

    constructor(
        private custchartsService: CustChartsService,
        private utilsService: UtilsService
    ) {
    }

    async ngOnInit() {
        await this.custchartsService.sendRequest();
        this.setData();
    }

    setData() {
        this.setDepositDetailData();
    }



    setDepositDetailData() {
        this.ntdAssets = this.custchartsService._ntdAssets;
        this.fxAssets = this.custchartsService._fxAssets;
        this.sumAssets = this.custchartsService._sumAssets;
        this.r6mthAvgBal = this.custchartsService._r6mthAvgBal;

        this.sdDetail = this.custchartsService._sdDetail;
        this.tdDetail = this.custchartsService._tdDetail;
        this.cdDetail = this.custchartsService._cdDetail;


        // 存款第二層-總存款-新台幣-合計
        this.ntdAssets.all = parseInt(this.ntdAssets.sd, 10) + parseInt(this.ntdAssets.td, 10) + parseInt(this.ntdAssets.cd, 10);
        // 存款第二層-總存款-外幣-合計
        this.fxAssets.all = parseInt(this.fxAssets.sd, 10) + parseInt(this.fxAssets.td, 10) + parseInt(this.fxAssets.cd, 10);
        // 存款第二層-總存款-合計(新台幣)-合計
        this.sumAssets.all = parseInt(this.sumAssets.sd, 10) + parseInt(this.sumAssets.td, 10) + parseInt(this.sumAssets.cd, 10);
        // 存款第二層-總存款-近6個月平均積數-合計
        this.r6mthAvgBal.all = parseInt(this.r6mthAvgBal.sd, 10) + parseInt(this.r6mthAvgBal.td, 10) + parseInt(this.r6mthAvgBal.cd, 10);
        //日期轉換 20190330 return 2019/03/30
        this.tdDetail.forEach((data, index) => {
            data.acctOpenDate = this.utilsService.changeDateStr(data.acctOpenDate, 'yyyy/MM/dd');
            data.tdDueDate = this.utilsService.changeDateStr(data.tdDueDate, 'yyyy/MM/dd');
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

}