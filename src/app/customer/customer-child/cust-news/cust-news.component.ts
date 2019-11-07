import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/services/modal.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';


@Component({
  selector: 'app-cust-news',
  templateUrl: './cust-news.component.html',
  styleUrls: ['./cust-news.component.scss']
})
export class NewsComponent implements OnInit {

  displayedColumns = ['date', 'tag', 'title'];
  dataSource = ELEMENT_DATA;

  bankColumns = ['bank', 'mount',  'total'];
  bankSource = BANK_DATA;


  constructor(private modalService: ModalService, public dialog: MatDialog) { }


  ngOnInit() {
  }

  openDialog(modalId: number) {
    const openId = modalId ;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '80%';
    dialogConfig.data = {
      id: openId,
      title: '',
      content_data: {}
    };

    switch (openId) {
      case 12 :
          dialogConfig.data.content_data = [];
          dialogConfig.data.title = '要點新聞';
          break;
      case 13 :
          dialogConfig.data.content_data = [];
          dialogConfig.data.title = '銀行同業';
          break;
      default:
        dialogConfig.data.content_data = [];
        dialogConfig.data.title = 'defalut no data';
        break;
    }

    this.dialog.open(DialogComponent, dialogConfig);
  }

}


export interface PeriodicElement {
  date: string;
  tag: string;
  title: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '06/18', tag: '+', title: '台積電揮別谷底開盤價歷史'},
  {date: '06/18', tag: '-', title: '台積電法說會後外資調高'},
  {date: '06/18', tag: '2', title: '張忠謀領導心法相信台積電'},
  {date: '06/18', tag: '1', title: '台積電揮別谷底開盤價歷史'},
  {date: '06/18', tag: '-', title: '台積電法說會後外資調高'},
  {date: '06/18', tag: '+', title: '張忠謀領導心法相信台積電'},
  {date: '06/18', tag: '-', title: '台積電揮別谷底開盤價歷史'},
  {date: '06/18', tag: '3', title: '台積電法說會後外資調高'},
  {date: '06/18', tag: '+', title: '張忠謀領導心法相信台積電'},
  {date: '06/18', tag: '+', title: '台積電法說會後外資調高'},
];

export interface BankElement {
  bank: string;
  mount: string;
  total: string;
}


const BANK_DATA: BankElement[] = [
  {bank: '國泰世華',  mount: '+ 100', total: '+ 100'},
  {bank: '台北富邦',  mount: '- 100', total: '- 100'},
  {bank: '花旗銀行',  mount: '0', total: '0'},
  {bank: '台灣銀行',  mount: '-100', total: '-100'},
  {bank: '台新銀行',  mount: '0', total: '0'},
];

