import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { DepositDetail } from 'src/app/objects/dto/product/product-depositDetail-response'
import { CommonRequest } from 'src/app/objects/dto/common/common-request';

@Component({
    selector: 'app-operating-deposit',
    templateUrl: './operating-deposit.component.html',
    styleUrls: ['./operating-deposit.component.scss']
})
export class OperatingDepositComponent extends BaseComponent implements OnInit {
    @Input() content: any;


    sdDetail: any[];
    cdDetail: any[];
    tdDetail: any[];


    urlList = [
        {
            'url': this.URL.PRODUCT_DEPOSIT_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': DepositDetail
        }
    ];


    ngOnInit() {
        this.sendRequest();
    }

    sendRequest() {
        for (let i = 0; i < this.urlList.length; i++) {
            super.sendRequestAsync(
                this.urlList[i].url,
                this.urlList[i].dtoRequset,
                this.urlList[i].dtoResponse).then((data: any) => {
                // console.log(data);




                this.ntdAssets = data.body.assets.ntdAssets;
                this.fxAssets = data.body.assets.fxAssets;
                this.sumAssets = data.body.assets.sumAssets;
                this.r6mthAvgBal = data.body.assets.r6mthAvgBal;

                this.sdDetail = data.body.sdDetail;
                this.cdDetail = data.body.cdDetail;
                this.tdDetail = data.body.tdDetail;
                // console.log(this.sdDetail);
            }, (err) => {

            });
        }
    }
     
        

    apiUrls: string[] = []; // 此componment需要發送的API urls
    // depositDetailTitle = this.TITLE.depositDetail;


    // 總存款-新台幣
    ntdAssets = {
        "sd": "",
        "td": "",
        "cd": ""
    }
    /// 總存款-外幣
    fxAssets = {
        "sd": "",
        "td": "",
        "cd": ""
    }
    // 總存款-合計
    sumAssets = {
        "sd": "",
        "td": "",
        "cd": ""
    }
    // 總存款-近6個月平均
    r6mthAvgBal = {
        "sd": "",
        "td": "",
        "cd": ""
    }

    constructor() {
        super()
    }

}
