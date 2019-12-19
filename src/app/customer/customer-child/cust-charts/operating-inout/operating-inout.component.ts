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
    ImportExportDetail: any = {};

    import: Array<any> = [];
    export: Array<any> = [];
    // column: any[];

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
        this.setImportExportDetailData();
    }
   
    setImportExportDetailData() {
        let cust = this.custchartsService;
        this.import = cust._import
        this.export = cust._export

        this.import[0].row = cust.inTotal;
        this.import[0].all = cust.SumData(cust.incolumnTotal);

        this.export[0].row = cust.outTotal;
        this.export[0].all = cust.SumData(cust.outcolumnTotal);
        
        //日期轉換 201903 return 2019/03
        this.import[0].mon.forEach((item, index, arr) => {
            arr[index] = this.getUtilsService().changeDateStr(item, 'yyyy/MM');
        });
        this.export[0].mon.forEach((item, index, arr) => {
            arr[index] = this.getUtilsService().changeDateStr(item, 'yyyy/MM');
        });

    }
}
