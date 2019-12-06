import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

import { CustBaseInfoComponent } from './customer-child/cust-baseinfo/cust-baseinfo.component';
import { ContributionChartComponent } from './customer-child/cust-baseinfo/contribution-chart/contribution-chart.component';
import { CustChartsComponent } from './customer-child/cust-charts/cust-charts.component';
import { NewsComponent } from './customer-child/cust-news/cust-news.component';
import { HistoryComponent } from './customer-child/cust-history/cust-history.component';

import { SharedMaterialModule } from '../objects/shared-material/shared-material.module';

// 共用的元件
import { SharedItemModule } from '../objects/shared-item/shared-item.module';
import { CommonAreaModule } from 'src/app/content-layout/common-area/common-area.module';

// 共同之客製作 Pipe
import { CustomPipeModule } from 'src/app/custom-pipe/custom-pipe.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedMaterialModule,
        SharedItemModule,
        CommonAreaModule,
        NgApexchartsModule,
        CustomPipeModule
    ],
    declarations: [
        CustBaseInfoComponent,
        ContributionChartComponent,
        CustChartsComponent,
        NewsComponent,
        HistoryComponent
    ],
    exports: [
        CustBaseInfoComponent,
        CustChartsComponent,
        NewsComponent,
        HistoryComponent,
    ]
})
export class CompanyModule { }
