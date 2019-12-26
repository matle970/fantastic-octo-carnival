import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { NoticeService } from 'src/app/services/common-area/notice.service';
@Component({
	selector: 'app-index-notice',
	templateUrl: './index-notice.component.html',
	styleUrls: ['./index-notice.component.scss']
})


export class IndexNoticeComponent implements OnInit, AfterContentChecked {

	tabIndex: string = 'all';

	@Input() content: any;

	indexNotice: any; // all notice unread
	noticeType: string; // index or company
	public noticeIndexNumber: number;
	public noticeCompanyNumber: number;

	constructor(private _noticeService: NoticeService) {
		this._noticeService.indexNotice$.subscribe(res => {
			this.noticeIndexNumber = res;

		});

		this._noticeService.companyNotice$.subscribe(res => {
			this.noticeCompanyNumber = res;
		});
	}

	ngOnInit() {
		this.indexNotice = this.content.content_data.data_list
		this.noticeType = this.content.notice_type;
	}

	checkAll() {
		const changeNotice = this.indexNotice;
		for (let i = 0; i < changeNotice.length; i++) {
			changeNotice[i].read = true;
		}
		this.indexNotice = JSON.parse(JSON.stringify(changeNotice));
		this.checkNoticeType();
	}

	ngAfterContentChecked(): void {	}

	changeReadStatus(index: any) {
		this.indexNotice[index].read = true;
		this.checkNoticeType();
	}

	changeTab(tabId: string) {
		this.tabIndex = tabId;
	}

	checkNoticeType() {
		const type = this.noticeType;
		const allUnreadNumber = this.filterUnreadNumber('all');
		console.log(type, allUnreadNumber);
		if (type === 'index') {
			this._noticeService.indexNotice$.next(allUnreadNumber);
		} else {
			this._noticeService.companyNotice$.next(allUnreadNumber);
		}
	}


	filterUnreadNumber(type: string) {

		const filterItems = this.indexNotice.filter(function (item: any) {
			if (type === 'all') {
				return item.read === false;
			} else {
				return (item.type === type) && (item.read === false);
			}
		});

		// console.log(filterItems)
		return filterItems.length;
	}

}
