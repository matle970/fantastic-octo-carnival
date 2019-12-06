import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// google map
import { MapComponent } from './map/map.component';
import { IconBellComponent } from './icon-bell/icon-bell.component';
import { IconGraybellComponent } from './icon-graybell/icon-graybell.component';
import { WaterPrintComponent } from './water-print/water-print.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    IconBellComponent,
    IconGraybellComponent,
    WaterPrintComponent,
    LoadingComponent
  ],
  exports: [
    MapComponent,
    IconBellComponent,
    IconGraybellComponent,
    WaterPrintComponent,
    LoadingComponent
  ]
})
export class SharedItemModule { }
