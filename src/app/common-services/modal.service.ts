import { Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { DialogComponent } from '../dialog/dialog.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit () {
  }



/**
 *
 * @param modalId 打開的 id 內容
 * @param wide 是否開啟後顯示寬
 */
  openDialog(modalId: number, wide?: boolean) {
    const openId = modalId ? modalId : 3;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
        id: openId,
        title: '',
    };

    if (wide) {
        dialogConfig.panelClass = 'open-table-wide';
    } else {
        dialogConfig.panelClass = 'open-table-narrow';
    }

    switch (openId) {
        case 3:
            dialogConfig.data.title = '公司資訊';
            break;
        case 4:
            dialogConfig.data.title = '集團資訊';
            break;


        default:
            dialogConfig.data.title = '公司資訊';
            break;


    }

    this.dialog.open(DialogComponent, dialogConfig);
}
}
