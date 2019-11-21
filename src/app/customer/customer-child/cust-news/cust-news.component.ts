import { Component, ViewChild, OnInit, OnChanges, Input } from '@angular/core';

import { ModalService } from 'src/app/common-services/modal.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { BaseComponent } from 'src/app/base/base.component';

import { CompanyNews } from 'src/app/objects/dto/custnews/custnews-response';
import { NewsBanklist } from 'src/app/objects/dto/custbanks/custbanks-response';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'app-cust-news',
  templateUrl: './cust-news.component.html',
  styleUrls: ['./cust-news.component.scss']
})
export class NewsComponent  extends BaseComponent  implements OnInit {

  displayedColumns = ['date', 'tag', 'title'];

  // 新聞列表
  newsSources: Array<any> = [];
  bankColumns = ['bank', 'valChange',  'totalChange'];

  // 銀行列表
  bankSource: Array<any> =[];

  PreDate: Date;
  LastDate: Date;

  urlList = [
    {
        'url': this.URL.NEWS_NEWS_DETAIL,
        'dtoResponse': CompanyNews
    },
    {
        'url': this.URL.NEWS_BANKS,
        'dtoResponse': NewsBanklist
    },
  ];


  constructor(private modalService: ModalService, public dialog: MatDialog) {
    super();
  }


  ngOnInit() {
    this.sendRquest();
  }

  sendRquest() {
    for (let i = 0; i < this.urlList.length; i++) {
      super.sendRequestAsync(this.urlList[i].url, this.urlList[i].dtoResponse).then((data: any) => {
          if (data.header.returnCode === '0000') {
              this.dataProcess(data, this.urlList[i].url);
          }
      }, (err) => {


      });
    }

  }

  dataProcess(data:any, url: string) {

    switch (url) {
      case this.URL.NEWS_NEWS_DETAIL:
        this.newsSources = data.body.newsList;
        break;

      case this.URL.NEWS_BANKS:
        this.bankSource = data.body.banksList;
        this.PreDate =  new Date(data.body.PreDate * 1000);
        this.LastDate =  new Date(data.body.LastDate * 1000);
        break;
    }

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
