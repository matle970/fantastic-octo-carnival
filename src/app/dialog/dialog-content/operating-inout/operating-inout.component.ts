import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { CommonRequest } from 'src/app/objects/dto/common/common-request';
import { ImportExportDetail } from 'src/app/objects/dto/product/product-importExportDetail-response';

@Component({
    selector: 'app-operating-inout',
    templateUrl: './operating-inout.component.html',
    styleUrls: ['./operating-inout.component.scss']
})
export class OperatingInoutComponent extends BaseComponent implements OnInit {
    @Input() content: any;

    import: any[];
    export: any[];
    

    urlList = [
        {
            'url': this.URL.PRODUCT_IMPORT_EXPORT_DETAIL,
            'dtoRequset': CommonRequest,
            'dtoResponse': ImportExportDetail
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
                console.log(data);

                this.import = data.body.import;
                this.export = data.body.export;
            }, (err) => {

            });
        }
    }

  



    constructor() {
        super();
    }



}
