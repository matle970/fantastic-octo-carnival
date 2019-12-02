import { Injectable, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from 'src/app/content-layout/common-area/dialog/dialog.component';


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

    openDialog(modalId: number, wide?: boolean, itemId?: string) {

        const openId = modalId ? modalId : 1;

        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            id: modalId,
            title: '',
            content_data: { // 之後要拿掉
                company_name: ''
            },
            item_id: itemId ? itemId : ''
        };

        if (wide) {
            dialogConfig.panelClass = 'open-table-wide';
        } else {
            dialogConfig.panelClass = 'open-table-narrow';
        }

        switch (openId) {
            case 3:
                dialogConfig.data.title = '公司資訊';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 4:
                dialogConfig.data.title = '集團資訊';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 5:
                dialogConfig.data.title = '個人關聯戶';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 6:
                dialogConfig.data.title = '經管資訊';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 7:
                dialogConfig.data.title = '貢獻度';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 8:
                dialogConfig.data.title = '存款餘額';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 9:
                dialogConfig.data.title = '放款餘額 / 貿融餘額';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 10:
                dialogConfig.data.title = '進口 / 出口';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 11:
                dialogConfig.data.title = 'TMU / MTM';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 12:
                dialogConfig.data.title = '要點新聞';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
            case 13:
                dialogConfig.data.title = '銀行同業';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;

            default:
                dialogConfig.data.title = '公司資訊';
                this.openWithConfig(DialogComponent, dialogConfig);
                break;
        }


        // this.dialog.open(DialogComponent, dialogConfig);

    }

    openWithConfig(a: any, b: any) {
        this.dialog.open(a, b);
    }




}
