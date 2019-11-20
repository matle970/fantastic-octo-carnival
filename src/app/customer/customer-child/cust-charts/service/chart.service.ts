import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/common-services/base/base.service';
import { AssetsLibilities } from 'src/app/objects/dto/product/product-assetsLibilities-response';
import { MatDialog } from '@angular/material';
import { ModalService } from 'src/app/common-services/modal.service';

@Injectable({
    providedIn: 'root'
})
export class ChartService {
    urlList = [{
        'url': this.baseService.URL.PRODUCT_ASSETS_LIBILITIES,
        'dtoResponse': AssetsLibilities
    }];

    constructor(private baseService: BaseService,
        private modalService: ModalService, 
        public dialog: MatDialog) { }

    sendRquest() {
        this.baseService.sendRequestAsync(this.urlList[0].url, this.urlList[0].dtoResponse)
            .then((data: any) => {

            }, (err) => { });
    }

    

}
