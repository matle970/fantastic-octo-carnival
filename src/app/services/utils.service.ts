import { Injectable } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';
import { Rules } from 'src/app/validation/rules';

@Injectable({ providedIn: 'root' })
export class UtilsService {

  constructor(private datePipe: DatePipe) { }

  /**
  * 日期字串轉換
  * changeDateStr('20190726', 'yyyy/MM/dd'), return '2019/07/26'
  * changeDateStr('201907', 'yyyy/MM'), return '2019/07'
  * @author KK
  * @modify 2019/10/30新增轉換年月(Tillie)
  * @param source
  * @param format
  */
  changeDateStr(source: string, format: string): string {
    const sourceLength = source.length;

    if (!source || sourceLength === 8) { // format 20190726, return '2019/07/26'
      const yearStr = parseInt(source.substring(0, 4), 10);
      const monthStr = parseInt(source.substring(4, 6), 10);
      const dayStr = parseInt(source.substring(6, 8), 10);
      const srouceDateType: Date = new Date(yearStr, monthStr - 1, dayStr);

      return this.datePipe.transform(srouceDateType, format, 'en-US');

    } else if (!source || sourceLength === 6) { // format 201907, return '2019/07'
      const yearStr = parseInt(source.substring(0, 4), 10);
      const monthStr = parseInt(source.substring(4, 6), 10);
      const srouceDateType: Date = new Date(yearStr, monthStr - 1);

      return this.datePipe.transform(srouceDateType, format, 'en-US');
    }

    return null;
  }


  /**
   * 增加千位符號,指定小數點
   * @author KK
   * @param num 數字
   * @param precision 小數點
   * @param addSymbol 是否加 $ 符號
   */
  commafyWithFixedDecila(num: any, precision: number, addSymbol?: boolean) {

    let inputValue = num || '';
    inputValue = this.replaceAll(inputValue, ',', '');

    let numValue: Number = 0;
    if (precision === 0) {
      numValue = Number(inputValue) || 0;
    } else {
      numValue = Number.parseFloat(inputValue);
    }

    inputValue = numValue.toFixed(precision);

    return this.commafy(inputValue, addSymbol ? addSymbol : false);
  }

  /**
   * 增加千位符號
   * @author KK
   * @param num 數字
   * @param addSymbol 是否加 $ 符號
   */
  commafy(num: any, addSymbol?: boolean) {

    num = num + this.getNullString();

    let integer = (num.split('.'))[0];
    const decimal = (num.split('.'))[1];

    const re = /(-?\d+)(\d{3})/;

    while (re.test(integer)) {
      integer = integer.replace(re, '$1,$2');
    }

    if (addSymbol ? addSymbol : false) { integer = '$' + integer; }

    if (typeof decimal === 'undefined') {
      return integer;
    } else {
      return integer + '.' + decimal;
    }
  }

  /**
   * 移除千位符號
   * @author KK
   * @param num
   */
  removeCommafy(num: any): number {
    let strNum = num + this.getNullString();

    if (!strNum) {
      return 0;
    }

    if (strNum.indexOf(',') === -1) {
      // tslint:disable-next-line: radix
      return parseInt(strNum);
    }

    strNum = this.replaceAll(strNum, ',', '');
    // tslint:disable-next-line: radix
    return parseInt(strNum);
  }


  /**
   * 取代字串
   * replaceAll('abc', 'b', 'd'), return 'adc'
   * @author KK
   * @param str
   * @param regex
   * @param replacement
   */
  replaceAll(str: string, regex: string, replacement: string): string {
    if (Rules.isNull(str) || Rules.isNull(regex) || Rules.isNull(replacement)) {
      return str;
    }
    return str.replace(new RegExp(regex, 'g'), replacement);
  }

  /**
   * 取得空字串
   * @author KK
   */
  getNullString(): string {
    return '';
  }

  /**
   * 將字串Y轉為boolean
   * flagTransBoolean('Y'), return true
   * @author KK
   * @param flagType
   */
  flagTransBoolean(flagType: string) {
    return flagType === 'Y' ? true : false;
  }

  /**
   * 取得加總數值
   * @author Tillie
   * @param data
   */
  getSumByArry(data: any[]) {
    let total = 0;
    data.forEach(value => {
      let addValue = 0;
      if (typeof(value) === typeof('str')) {
        console.log('字串');
        addValue = this.removeCommafy(value === '' ? 0 : parseInt(value, 10));
      } else {
        console.log('數字');
        addValue = this.removeCommafy(value);
      }
      total += addValue;
    });
    return total;
  }
}
