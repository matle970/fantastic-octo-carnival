import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { DepositDetail } from 'src/app/objects/dto/product/product-depositDetail-response'
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';
import { ModalService } from 'src/app/services/common-services/modal.service';

@Component({
    selector: 'app-operating-deposit',
    templateUrl: './operating-deposit.component.html',
    styleUrls: ['./operating-deposit.component.scss']
})
export class OperatingDepositComponent extends BaseComponent implements OnInit {
    @Input() content: any;

    // 營運量-存款餘額第二層
    DepositDetailObj: any = {};



    urlList = [
        {
            'url': this.URL.PRODUCT_DEPOSIT_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': DepositDetail
        }
    ];

    constructor(
        private custchartsService: CustChartsService,
        private modalService: ModalService
    ) {
        super()
    }

    async ngOnInit() {
        await this.custchartsService.sendRequest();
        // console.log('xxx', this.DepositDetailObj = this.custchartsService.DepositDetailObj);
        this.DepositDetailObj = this.custchartsService.DepositDetailObj;

        this.ntdAssets = this.DepositDetailObj.data.body.assets.ntdAssets;
        this.fxAssets = this.DepositDetailObj.data.body.assets.fxAssets
        this.sumAssets = this.DepositDetailObj.data.body.assets.sumAssets;
        this.r6mthAvgBal = this.DepositDetailObj.data.body.assets.r6mthAvgBal;
        
        // console.log('yyy',this.sdDetail = this.DepositDetailObj.data.body.sdDetail);
        this.sdDetail = this.DepositDetailObj.data.body.sdDetail;
        this.cdDetail = this.DepositDetailObj.data.body.cdDetail;
        this.tdDetail = this.DepositDetailObj.data.body.tdDetail;
    }

    apiUrls: string[] = []; // 此componment需要發送的API urls
    // depositDetailTitle = this.TITLE.depositDetail;

    ntdAssets: {
        "sd": "",
        "td": "",
        "cd": ""
    }
    fxAssets: {
        "sd": "",
        "td": "",
        "cd": ""
    }
    sumAssets: {
        "sd": "",
        "td": "",
        "cd": ""
    }
    r6mthAvgBal: {
        "sd": "",
        "td": "",
        "cd": ""
    }

    sdDetail: any[];
    tdDetail: any[];
    cdDetail: any[];
}





