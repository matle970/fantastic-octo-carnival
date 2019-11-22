import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ModalService } from 'src/app/common-services/modal.service';
import { DummyData } from 'src/localServer/dummy-data';
import { DialogComponent } from '../../../dialog/dialog.component';

import { BaseComponent } from 'src/app/base/base.component';
import { CommonResponse } from 'src/app/objects/dto/common/common-response';
import { DepositDetail } from 'src/app/objects/dto/product/product-depositDetail-response'
import { from } from 'rxjs';
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
            'dtoResponse': DepositDetail
        }
    ];


    ngOnInit() {
        this.sendRequest();
    }

    sendRequest() {
        for (let i = 0; i < this.urlList.length; i++) {
            super.sendRequestAsync(this.urlList[i].url, this.urlList[i].dtoResponse).then((resdata: any) => {
                // console.log(resdata);




                this.ntdAssets = resdata.body.assets.ntdAssets;
                this.fxAssets = resdata.body.assets.fxAssets;
                this.sumAssets = resdata.body.assets.sumAssets;
                this.r6mthAvgBal = resdata.body.assets.r6mthAvgBal;

                this.sdDetail = resdata.body.sdDetail;
                this.cdDetail = resdata.body.cdDetail;
                this.tdDetail = resdata.body.tdDetail;
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
