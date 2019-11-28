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
    // all: any[];

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
        console.log('xxx', this.import);
        console.log(this.getUtilsService().changeDateStr(this.import[0].mon[0], 'yyyy/MM'));


        this.export = this.ImportExportDetailObj.data.body.export;
        console.log('xxxx', this.export);
        console.log(this.getUtilsService().changeDateStr(this.export[0].mon[0], 'yyyy/MM'));
        // console.log(this.getUtilsService().getSumByArry(this.export[0].all));

        // this.export[0].getSumArray.all = this.getSumArray(this.export);
        let res = this.export[0].all.map(Number);
        let resdata = this.SumData(res);
        this.export[0] = resdata;
        let a = resdata.toString();
        console.log('xxx,', typeof resdata);
        console.log('xxxx', typeof res);
        console.log('xxxxx', typeof resdata.toString());
        //    let ree = this.export[0].all.map(Number);
        // console.log('xxxxx',ree);
        
        console.log('xxxy',typeof this.export[0]);
        
        typeof name; // 'string'
    }



    SumData(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        };
        return sum;
    }



    // getSumArray(array) {
    //     /*
    //      * @param array
    //      * @array 
    //      **/
    //     let sum = 0;
    //     const len = array.length;
    //     for (let i = 0; i < len; i++) {
    //         sum += array[i];
    //     }
    //     return sum;
    // }

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
