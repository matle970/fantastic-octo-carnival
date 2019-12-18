import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from '../../customer/customer-child/cust-baseinfo/company-info/map/map.component';
import { IconBellComponent } from './icon-bell/icon-bell.component';
import { IconGraybellComponent } from './icon-graybell/icon-graybell.component';
import { WarningIconComponent } from 'src/app/customer/customer-child/cust-baseinfo/warning-icon/warning-icon.component';
import { IconDelayComponent } from 'src/app/customer/customer-child/cust-baseinfo/warning-icon/icon-delay/icon-delay.component';
import { WaterPrintComponent } from './water-print/water-print.component';
import { LoadingComponent } from './loading/loading.component';
import { NoDataComponent } from './no-data/no-data.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    IconBellComponent,
    IconGraybellComponent,
    WarningIconComponent,
    IconDelayComponent,
    WaterPrintComponent,
    LoadingComponent,
    NoDataComponent
  ],
  exports: [
    MapComponent,
    IconBellComponent,
    IconGraybellComponent,
    WarningIconComponent,
    IconDelayComponent,
    WaterPrintComponent,
    LoadingComponent,
    NoDataComponent
  ]
})
export class SharedItemModule { }
