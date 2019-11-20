import { Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { DialogComponent } from '../dialog/dialog.component';

import { DummyData } from '../../localServer/dummy-data';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnInit {
  constructor(public dialog: MatDialog) {}

  // dummy = DummyData;

  ngOnInit () {
    console.log(this)
  }



  /**
   *
   * @param id 要開啟的第二層 id
   */
  openModal(id?: string) {

    const dialogConfig = new MatDialogConfig();

    // 要開啟的 modal id
    const modal_id = id ? id : 1;
    // console.log(dummy)
    // console.log('modal id',id)

    this.dialog.open(DialogComponent, dialogConfig);
  }
  openWarningModal() {}
  openErrorModal() {}
  openConfirmModal() {}
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