import { Component, OnInit, Input } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';
import { BaseComponent } from 'src/app/base/base-component';


export interface controEle {
  id: string;
  text: string;
  period: string;
  now: string;
  load: string;
  trade: string;
  cus: string;
  tmu: string;
  other: string;
  all: string;
}

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss']
})
export class ContributionComponent extends BaseComponent implements OnInit {
  manageColumn = ['id', 'now', 'load', 'trade', 'cus', 'tmu', 'other', 'all'];

  @Input() content: any;
  controList: any[] = []; // 資料列
  periodChange: string[] = []; // 增減變化(+ or -)
  totalChang: any; // 增減總和
  title = this.TITLE.contribution; // 標題
  // controList: controEle[] = [
  //   {
  //     id: 'a001',
  //     text: '去年度累計貢獻度',
  //     period: '2017/12 - 2018/05',
  //     now: '1000',
  //     load: '1000',
  //     trade: '500',
  //     cus: '500',
  //     tmu: '1000',
  //     other: '1000',
  //     all: '6000',
  //   },
  //   {
  //     id: 'a002',
  //     text: '今年度累計貢獻度',
  //     period: '2018/12 - 2019/05',
  //     now: '1000',
  //     load: '1000',
  //     trade: '500',
  //     cus: '500',
  //     tmu: '1000',
  //     other: '1000',
  //     all: '6500'
  //   },


  // ];
  constructor() { super(); }

  ngOnInit() {
    this.setContent();
  }

  setContent() {
    const lastYearData = this.content.content_data.lastYear; // 去年度資料
    const thisYearData = this.content.content_data.thisYear; // 今年度資料

    // for 前端迴圈用
    this.controList.push(lastYearData);
    this.controList.push(thisYearData);

    lastYearData.data.push(super.getUtilsService().getSumByArry(lastYearData.data)); // 取得去年總和
    thisYearData.data.push(super.getUtilsService().getSumByArry(thisYearData.data)); // 取得今年總和

    const totalChangArry = []; // for 計算總增減變化
    for (let i = 0; i < 6; i++) {
      const lastYear = super.getUtilsService().removeCommafy(this.controList[0]['data'][i]);
      const thisYear = super.getUtilsService().removeCommafy(this.controList[1]['data'][i]);
      const change = thisYear - lastYear;
      totalChangArry.push(change);
      if ( change > 0) {
        this.periodChange.push('+');
      } else if ( change < 0) {
        this.periodChange.push('-');
      } else {
        this.periodChange.push('|'); // (待確認)相符合的時候帶什麼符號?
      }
    }
    this.totalChang = super.getUtilsService().addpPusMinus(super.getUtilsService().getSumByArry(totalChangArry));
  }

}
