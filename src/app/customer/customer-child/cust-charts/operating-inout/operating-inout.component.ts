import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { ImportExportDetail } from 'src/app/objects/dto/product/product-importExportDetail-response';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';
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
    // row: any[];

    urlList = [
        {
            'url': this.URL.PRODUCT_IMPORT_EXPORT_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': ImportExportDetail
        }
    ];



    constructor(
        private custchartsService: CustChartsService,

    ) {
        super();
    }

    async ngOnInit() {
        await this.custchartsService.sendRequest();
        this.setData();
    }

    setData() {
        this.ImportExportDetailObj = this.custchartsService.ImportExportDetailObj;
        this.import = this.ImportExportDetailObj.data.body.import;
        this.export = this.ImportExportDetailObj.data.body.export;

        // 進口實績-橫向加總&縱向加總
        for (let i = 0; i < this.import.length; i++) {
            let column1 = this.import[i].usdTxnAmt.map(Number);
            let column2 = this.SumData(column1);
            let column3 = column2.toString();
            this.import[i].column = column3;
            // console.log('xx',this.import[i].column);
            // console.log('xxx',this.import[2].column);
            // console.log('xxxx',this.import[3].column);
            // let column4 = Array.of(column3);
            // console.log('xx',column3);
            
            let a = this.import[i].usdTxnAmt.map(Number);
            
            let list = [];
            this.import.forEach(function (val, index) {
                
                list.push(val.usdTxnAmt.map(Number));
            });
            

             console.log('xxx', list);
            //  console.log('xx',a);
            let sum0 = this.SumData(a);
            // console.log('xxx',sum0);
            this.import[0].row = sum0;
            // b = this.import[1].usdTxnAmt.map(Number),
            // c = this.import[2].usdTxnAmt.map(Number);;
            // let s = a.map(function (v) {
            //     return v= v++;


            // let a = this.import[0].usdTxnAmt.map(Number),
            //     b = this.import[1].usdTxnAmt.map(Number),
            //     c = this.import[2].usdTxnAmt.map(Number);;
            // let s = a.map(function (v, i) {
            //     return v + b[i] + c[i];


            // });
            // console.log('xx', s);
            // this.import[0].row = a;
            // console.log('xxxx',this.import[0].row )

            // for (let i = 0; i < this.import.length; i++) {
            //     let sum1 = this.import[i].usdTxnAmt.concat(this.import[0].usdTxnAmt);

            //     // let sum1 = this.import[0].usdTxnAmt.concat(this.import[1].usdTxnAmt, this.import[2].usdTxnAmt);
            //     // console.log('xxxxx',sum1);
            //     let sum2 = sum1.map(Number);
            //     // console.log('xxxxx',sum2);
            //     // let sum3 = s.concat(sum2);
            //     // console.log('xxxxx',sum3);
            //     let sum4 = this.SumData(sum2);
            //     // console.log('xxxxx',sum4);
            //     let sum5 = sum4.toString();
            //     // console.log('xxxxx',sum5);
            //     this.import[0].all = sum5;
            //     // console.log('xxxxx',this.import[0].all);
            // }
        }

        // 出口實績-橫向加總&縱向加總
        for (let i = 0; i < this.export.length; i++) {
            let column1 = this.export[i].usdTxnAmt.map(Number);
            let column2 = this.SumData(column1);
            let column3 = column2.toString();
            this.export[i].column = column3


            
            let a = this.export[0].usdTxnAmt.map(Number),
                b = this.export[1].usdTxnAmt.map(Number),
                c = this.export[2].usdTxnAmt.map(Number);
            let s = a.map(function (v, i) {
                return v + b[i] + c[i];
            });
            this.export[0].row = s;
            // console.log('yy',this.export[0].row);
            let sum1 = this.export[0].usdTxnAmt.concat(this.export[1].usdTxnAmt, this.export[2].usdTxnAmt);
            // console.log('xxxxx',s);
            let sum2 = sum1.map(Number);
            let sum3 = s.concat(sum2);
            let sum4 = this.SumData(sum3);
            let sum5 = sum4.toString();
            // console.log('xxxxx',sum2);
            this.export[0].all = sum5;
        }
        //日期轉換 201903 return 2019/03

        this.import[0].mon.forEach((item, index, arr) => {
            arr[index] = this.getUtilsService().changeDateStr(item, 'yyyy/MM');
        });
        this.export[0].mon.forEach((item, index, arr) => {
            arr[index] = this.getUtilsService().changeDateStr(item, 'yyyy/MM');
        });
    }
    SumData(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        return sum;
    }
}
