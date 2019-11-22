import { Injectable } from '@angular/core';
import { AssetsLibilities } from 'src/app/objects/dto/product/product-assetsLibilities-response';
// import { MatDialog } from '@angular/material';
// import { ModalService } from 'src/app/common-services/modal.service';
import { HttpService } from 'src/app/common-services/http.service';
import { GeturlService } from 'src/app/common-services/geturl.service';

@Injectable({ providedIn: 'root' })
export class ChartService {

    constructor(private httpservice: HttpService,
        // private modalService: ModalService,
        // private dialog: MatDialog,
        private geturlservice: GeturlService) { }

    urlList = [{
        'url': this.geturlservice.URL.PRODUCT_ASSETS_LIBILITIES,
        'dtoResponse': AssetsLibilities
    }];



    sendRquest() {
        this.httpservice.sendRequestAsync(this.urlList[0].url, this.urlList[0].dtoResponse)
            .then((data: any) => {

            }, (err) => { });
    }
}
