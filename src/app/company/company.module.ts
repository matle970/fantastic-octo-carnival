import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

import { BaseInfoComponent } from './base-info/base-info.component';
import { CompChartsComponent } from './comp-charts/comp-charts.component';
import { NewsComponent } from './news/news.component';
import { CompHistoryComponent } from './comp-history/comp-history.component';

import { SharedMaterialModule } from './../shared-material/shared-material.module';

// 共用的元件
import { ComponentsModule } from '../components/components.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule,
    ComponentsModule,
    NgApexchartsModule
  ],
  declarations: [
    BaseInfoComponent,
    CompChartsComponent,
    NewsComponent,
    CompHistoryComponent
  ],
  exports: [
    BaseInfoComponent,
    CompChartsComponent,
    NewsComponent,
    CompHistoryComponent
  ]
})
export class CompanyModule { }
