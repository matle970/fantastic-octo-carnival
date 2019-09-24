import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseInfoComponent } from './base-info/base-info.component';
import { CompChartsComponent } from './comp-charts/comp-charts.component';
import { NewsComponent } from './news/news.component';
import { CompHistoryComponent } from './comp-history/comp-history.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
