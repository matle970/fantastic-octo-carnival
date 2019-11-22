import { Injectable, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from 'src/app/dialog/dialog.component';


@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(public dialog: MatDialog) { }


  /**
   * 共同的開啟 dialog 功能
   * @param modalId 開啟的id
   * @param wide  開啟的 dialog 是否是寬版模式
   */

  openDialog(modalId: number, wide?: boolean) {

    const openId = modalId ? modalId : 1;

    const dialogConfig = new MatDialogConfig();

      dialogConfig.autoFocus = false;
      dialogConfig.data = {
          id: modalId,
          title: '',
          content_data: { // 之後要拿掉
            company_name: ''
          }
      };

      if (wide) {
        dialogConfig.panelClass = 'open-table-wide';
      } else {
        dialogConfig.panelClass = 'open-table-narrow';
      }

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
        case 5:
            dialogConfig.data.title = '個人關聯戶';
            break;
        case 6:
            dialogConfig.data.title = '經管資訊';
            break;
        case 7:
            dialogConfig.data.title = '貢獻度';
            break;
        case 12 :
            dialogConfig.data.title = '要點新聞';
            break;
        case 13 :
            dialogConfig.data.title = '銀行同業';
            break;

        default:
            dialogConfig.data.title = '公司資訊';
            break;
    }
    this.dialog.open(DialogComponent, dialogConfig);

  }




 }
