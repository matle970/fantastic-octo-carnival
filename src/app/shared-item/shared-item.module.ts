import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// google map
import { MapComponent } from './map/map.component';
import { IconBellComponent } from './icon-bell/icon-bell.component';
import { IconGraybellComponent } from './icon-graybell/icon-graybell.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapComponent,
    IconBellComponent,
    IconGraybellComponent
  ],
  exports: [
    MapComponent,
    IconBellComponent,
    IconGraybellComponent
  ]
})
export class SharedItemModule { }
