import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CustChartsService } from 'src/app/services/customer/cust-charts/cust-charts.service';
import { UtilsService } from 'src/app/services/common-services/utils.service';

@Component({
    selector: 'app-operating-inout',
    templateUrl: './operating-inout.component.html',
    styleUrls: ['./operating-inout.component.scss']
})
export class OperatingInoutComponent implements OnInit, OnChanges {
    @Input() content: any;

    //營運量第二層-進出口 html text
    text = this.custchartsService.baseservice.gettextservice.custchartstext;
    import_text: string = this.text.import_text;
    export_text: string = this.text.export_text;
    grandTotal_text: string = this.text.grandTotal_text;
    total_text: string = this.text.total_text;

    // 營運量-進出口實績第二層
    ImportExportDetail: any = {};
    import: Array<any> = [];
    export: Array<any> = [];
    // column: any[];

    // urlList = [
    //     {
    //         'url': this.URL.PRODUCT_IMPORT_EXPORT_DETAIL,
    //         'dtoRequset': CommonRequest,
    //         'dtoResponse': ImportExportDetail
    //     }
    // ];

    constructor(
        private custchartsService: CustChartsService,
        private utilsService: UtilsService

    ) { }

    ngOnInit() {
        this.custchartsService.sendRequest();
        this.setData();
    }

    ngOnChanges() {

    }

    setData() {
        this.setImportExportDetailData();
    }

    setImportExportDetailData() {
        let cust = this.custchartsService;

        this.import = cust._import
        this.export = cust._export

        this.import[0].row = cust.inTotal;
        this.import[0].all = (cust.SumData(cust.inTotal)) * 2;

        this.export[0].row = cust.outTotal;
        this.export[0].all = (cust.SumData(cust.outTotal)) * 2;

        //日期轉換 201903 return 2019/03
        this.import[0].mon.forEach((item, index, arr) => {
            arr[index] = this.utilsService.changeDateStr(item, 'yyyy/MM');
        });
        this.export[0].mon.forEach((item, index, arr) => {
            arr[index] = this.utilsService.changeDateStr(item, 'yyyy/MM');
        });

    }

}
