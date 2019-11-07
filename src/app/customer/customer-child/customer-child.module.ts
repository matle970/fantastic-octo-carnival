import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

import { CustBaseInfoComponent } from './cust-baseinfo/cust-baseinfo.component';
import { CustChartsComponent } from './cust-charts/cust-charts.component';
import { NewsComponent } from './cust-news/cust-news.component';
import { HistoryComponent } from './cust-history/cust-history.component';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';

// 共用的元件
import { CommonAreaModule } from '../../common-area/common-area.module';
import { SharedItemModule } from '../../shared-item/shared-item.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule,
    SharedItemModule,
    CommonAreaModule,
    NgApexchartsModule
  ],
  declarations: [
    CustBaseInfoComponent,
    CustChartsComponent,
    NewsComponent,
    HistoryComponent
  ],
  exports: [
    CustBaseInfoComponent,
    CustChartsComponent,
    NewsComponent,
    HistoryComponent
  ]
})
export class CompanyModule { }
