import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class DateUtilService {
	static CURRENT_DATE = 'yyyy/MM/dd';
	static YESTERDAY_DATE = 'yyyy/MM/dd';
	static LAST_MONTH = 'yyyy/MM';
	static LAST_DECEMBER = 'yyyy/MM';
	_currentDate;
	_yesterdayDate;
	_lastMonth;
	_lastDecember;

	constructor(private datePipe: DatePipe) { }

	get currentDate() {
		this._currentDate = this.datePipe.transform(new Date(), DateUtilService.CURRENT_DATE);
		
		return this._currentDate;
	}
	get yesterdayDate() {
		let date = new Date();
		date.setDate(date.getDate() - 1);
		this._yesterdayDate = this.datePipe.transform(date, DateUtilService.YESTERDAY_DATE);
		
		return this._yesterdayDate;
	}
	get lastMonth() {
		let date = new Date();
		date.setMonth(date.getMonth() - 1);
		this._lastMonth = this.datePipe.transform(date, DateUtilService.LAST_MONTH);
		
		return this._lastMonth;
	}
	get lastDecember() {
		this._lastDecember = this.datePipe.transform(new Date(new Date().getFullYear() - 1 , 11, 31), DateUtilService.LAST_DECEMBER);
		
		return this._lastDecember;
	}

}
