import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ModalService } from 'src/app/services/modal.service';

import { BaseComponent } from 'src/app/base/base-component';
import { CommonResponse } from 'src/app/objects/dto/common/common-response';
import {DepositDetail} from 'src/app/objects/dto/product/product-depositDetail-response'
import { from } from 'rxjs';
@Component({
  selector: 'app-operating-deposit',
  templateUrl: './operating-deposit.component.html',
  styleUrls: ['./operating-deposit.component.scss']
})
export class OperatingDepositComponent extends BaseComponent implements OnInit {
  




//   urlList = [
//     {
//         'url': this.URL.PRODUCT_DEPOSIT_DETAIL,
//         'dtoResponse': DepositDetail
//     }
// ];
  constructor(private modalService: ModalService, public dialog: MatDialog) {
    super(); }

  ngOnInit() {
    this.sendRequest();
  }

    sendRequest(){}



    apiUrls: string[] = []; // 此componment需要發送的API urls
    depositDetailTitle = this.TITLE.depositDetail;
}

