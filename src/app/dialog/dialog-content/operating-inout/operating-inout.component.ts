import { Component, OnInit, Input } from '@angular/core';
import { ImportExportDetail } from 'src/app/objects/dto/product/product-importExportDetail-response';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
    selector: 'app-operating-inout',
    templateUrl: './operating-inout.component.html',
    styleUrls: ['./operating-inout.component.scss']
})
export class OperatingInoutComponent extends BaseComponent implements OnInit {
    @Input() content: any;

    // import: any[];
    // export: any[];


    urlList = [
        {
            'url': this.URL.PRODUCT_IMPORT_EXPORT_DETAIL,
            'dtoResponse': ImportExportDetail
        }
    ];

    ngOnInit() {
        // this.sendRequestAsync();
    }
    sendRequest() {
        for (let i = 0; i < this.urlList.length; i++) {
            super.sendRequestAsync(this.urlList[i].url, this.urlList[i].dtoResponse).then((resdata: any) => {
                console.log(resdata);

            this.import[0] = resdata.body.import[0]['mon']

            }, (err) => {

            });
        }
    }

   import = [
        {
            txnTypeDesc: "進口託收",
            mon: ["201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "209108", "201909"],
            usdTxnAmt: ["10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000"]
        }
    ]
    export = [
        {
            txnTypeDesc: "出口OA",
            mon: ["201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907", "209108", "201909"],
            usdTxnAmt: ["10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000"]
        }
    ]


            constructor() {
                super();
            }



        }
