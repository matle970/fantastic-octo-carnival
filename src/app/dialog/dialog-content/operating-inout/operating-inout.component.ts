import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { ImportExportDetail } from 'src/app/objects/dto/product/product-importExportDetail-response';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';
import { ModalService } from 'src/app/services/common-services/modal.service';
import { copyStyles } from '@angular/animations/browser/src/util';


@Component({
    selector: 'app-operating-inout',
    templateUrl: './operating-inout.component.html',
    styleUrls: ['./operating-inout.component.scss']
})
export class OperatingInoutComponent extends BaseComponent implements OnInit {
    @Input() content: any;

    // 營運量-進出口實績第二層
    ImportExportDetailObj: any = {};

    import: any[];
    export: any[];
    

    urlList = [
        {
            'url': this.URL.PRODUCT_IMPORT_EXPORT_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': ImportExportDetail
        }
    ];



    constructor(
        private custchartsService: CustChartsService,
        private modalService: ModalService

    ) {
        super();
    }

    async ngOnInit() {
        await this.custchartsService.sendRequest();

        this.ImportExportDetailObj = this.custchartsService.ImportExportDetailObj;

        // console.log('xxxx',this.ImportExportDetailObj = this.custchartsService.ImportExportDetailObj);

        this.import = this.ImportExportDetailObj.data.body.import;
        // console.log('xxx', this.import);
        // console.log(this.getUtilsService().changeDateStr(this.import[0].mon[0], 'yyyy/MM'));
        // this.import[0].mon[0] = this.getUtilsService().changeDateStr(this.import[0].mon[0], 'yyyy/MM');
        // console.log('aaa',this.import[0].mon);
        this.export = this.ImportExportDetailObj.data.body.export;
        // console.log('xxxx', this.export);
        // console.log(this.getUtilsService().changeDateStr(this.export[0].mon[0], 'yyyy/MM'));


        for (let i = 0; i < this.import.length; i++) {
            let column1 = this.import[i].usdTxnAmt.map(Number);
            let column2 = this.SumData(column1);
            let column3 = column2.toString();
            this.import[i].column = column3;
           
            let a = this.import[0].usdTxnAmt.map(Number),
                b = this.import[1].usdTxnAmt.map(Number),
                c = this.import[2].usdTxnAmt.map(Number);;
            let s = a.map(function (v, i) {
                return v + b[i] + c[i];
                
            });
            this.import[0].row = s;
        }
        

        for (let i = 0; i < this.export.length; i++) {
            let column1 = this.export[i].usdTxnAmt.map(Number);
            let column2 = this.SumData(column1);
            let column3 = column2.toString();
            this.export[i].column = column3

            let a = this.export[0].usdTxnAmt.map(Number),
                b = this.export[1].usdTxnAmt.map(Number),
                c = this.export[2].usdTxnAmt.map(Number);;
            let s = a.map(function (v, i) {
                return v + b[i] + c[i];
            });
            this.export[0].row = s;
        }
        

    }


    // for (let i = 0; i < this.export.length; i++){
    //          let a = this.export[0], b = this.export[1];
    // let s = a.map(function (v, i) {
    //     return v + b[i];
    // });
    // console.log('yyy', s);
    //         }
    // }



    SumData(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        return sum;
    }



    //

    // all: ['2000','2000','2000','2000','2000','2000','2222','3333']

    // import: [
    //     {
    //         "txnTypeDesc": "",
    //         "mon": ["", "", "", "", "", "", "", ""],
    //         "usdTxnAmt": ["", "", "", "", "", "", "", ""]
    //     }
    // ]
    // export: [
    //     {
    //         "txnTypeDesc": "",
    //         "mon": ["", "", "", "", "", "", "", ""],
    //         "usdTxnAmt": ["", "", "", "", "", "", "", ""]
    //     }
    // ]
}
