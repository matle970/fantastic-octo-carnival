import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { BaseComponent } from 'src/app/base/base.component';
import { CompanyNews } from 'src/app/objects/dto/custnews/custnews-response';
import { NewsBanklist } from 'src/app/objects/dto/custbanks/custbanks-response';
import { ModalService } from 'src/app/services/common-services/modal.service';


import { NewsService } from 'src/app/services/customer/cust-news/news.service';
import { DialogService } from 'src/app/services/common-services/dialog.service';
@Component({
  selector: 'app-cust-news',
  templateUrl: './cust-news.component.html',
  styleUrls: ['./cust-news.component.scss']
})



export class NewsComponent  extends BaseComponent  implements OnInit {

  constructor(
    private newsService: NewsService,
    private modalService: ModalService,
    private dialogService: DialogService,
    public dialog: MatDialog,
    ) {
    super();
    this.newsService.sendRquest();

  }

  displayedColumns = ['date', 'tag', 'title'];

  // 新聞列表
  newsSources: any = [];

  bankColumns = ['bank', 'valChange',  'totalChange'];

  // 銀行列表
  bankSource: any = [];

  // 上次查詢日期
  PreDate: Date;

  // 最近查詢日期
  LastDate: Date;

  ngOnInit() {
    this.getNewsDate();
  }

  getNewsDate() {
    this.newsSources = this.newsService.newsSources;
    this.bankSource = this.newsService.banksSources;
    this.PreDate = this.newsService.PreDate;
    this.LastDate = this.newsService.LastDate;
  }

  openDialog(id: number, wide?: boolean, itemId?: string) {
    this.dialogService.openDialog(id, wide, itemId);
  }

}
