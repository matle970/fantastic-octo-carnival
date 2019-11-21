import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateShortFormat } from './date-short.detepipe';
import { DateFormat } from './dateformat.detepipe';


@NgModule({
  imports: [
      CommonModule,
  ],
  declarations: [
    DateShortFormat,
    DateFormat

  ],
  exports: [
    DateShortFormat,
    DateFormat
  ]
})

export class CustomPipeModule { }
