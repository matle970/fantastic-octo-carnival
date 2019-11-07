import { Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { DialogComponent } from '../../dialog/dialog.component';

import { DummyData } from '../../../localServer/dummy-data';

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
}
