import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({ providedIn: 'root' })

@Pipe({
  name: 'dateFormat'
})

/**
 * User 要求的時間格式為 ：yyyy/MM/dd  EX: 2019/11/12
 * 部份時間格式不出現年：MM/dd ex: 10/21
 */

export class DateFormat extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, "yyyy/MM/dd");
  }
}
