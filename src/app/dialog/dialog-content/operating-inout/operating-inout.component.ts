import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { ImportExportDetail } from 'src/app/objects/dto/product/product-importExportDetail-response';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';
import { ModalService } from 'src/app/services/common-services/modal.service';

@Component({
    selector: 'app-operating-inout',
    templateUrl: './operating-inout.component.html',
    styleUrls: ['./operating-inout.component.scss']
})
export class OperatingInoutComponent extends BaseComponent implements OnInit {
    @Input() content: any;

    // 營運量-進出口實績第二層
    ImportExportDetailObj: any = {};

    // import: any[];
    // export: any[];


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
        // console.log(this.custchartsService.ImportExportDetailObj);
       
        this.import = this.ImportExportDetailObj.data.body.import;
        console.log('xxxx',this.import = this.ImportExportDetailObj.data.body.import);
    }
    
    import: any[];
    export: any[];

    // import: [
    //     {
    //         "txnTypeDesc": "",
    //         "mon": ["201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
    //         "usdTxnAmt": ["10000", "10000", "10000", "10000", "10000", "10000", "10000", "10000"]
    //     }
    // ]
    // export: [
    //     {
    //         "txnTypeDesc": "",
    //         "mon": ["201812", "201901", "201902", "201903", "201904", "201905", "201906", "201907"],
    //         "usdTxnAmt": ["40000", "10000", "10000", "10000", "10000", "10000", "10000", "10000"]
    //     }
    // ]
}
