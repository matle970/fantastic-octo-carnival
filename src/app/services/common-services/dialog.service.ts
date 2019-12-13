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

    openDialog(modalId: number, wide?: boolean, title?: string, data?: object, itemId?: string) {

        const openId = modalId ? modalId : 0;
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            id: openId,
            title,
            item_id: itemId ? itemId : '',
            data: data
        };

        if (wide) {
            dialogConfig.panelClass = 'open-table-wide';
        } else {
            dialogConfig.panelClass = 'open-table-narrow';
        }

        this.dialog.open(DialogComponent, dialogConfig);
    }

    openWithConfig(a: any, b: any) {
        this.dialog.open(a, b);
    }
}
