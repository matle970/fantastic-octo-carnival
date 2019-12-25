import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { FilterService } from 'src/app/services/common-area/filter.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IndexTableElement } from 'src/app/dashboard/service/dashboard-data.service';
import { StateGroup } from '../auto-search/auto-search.component';

export interface DataList {
	id: string;
	data: string;
}

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnChanges {
	[x: string]: any;
	@Input() datalist: DashboardComponent;
	keywordList: IndexTableElement[];
	@Input() getKeyword;
	@Output('referBranchData') referBranchData = new EventEmitter();
	@Output('wmBranchData') wmBranchData = new EventEmitter();
	@Output('filterData') filterData = new EventEmitter();

	//wmBranch: Array<{ branchId: string, branchName: string }> = [{ branchId: '0', branchName: '經管行' }];
	//referBranch: Array<{ branchId: string, branchName: string }> = [{ branchId: '0', branchName: '授信轉介行' }];
	wmBranch: Array<string> = ['經管行'];
	referBranch: Array<string> = ['授信轉介行'];

	firstKeyChange = true;
	lastKeyword: string;

	searchingCtrl = new FormControl();
	filteredValues: Observable<DataList[]>;
	searchingList: DataList[] = [];

	nowBranch = '經管行';
	nowForword = '授信轉介行';

	myKeyword = '';
	wmBranchList;
	referBranchList;

	constructor(private filterSerivce: FilterService, private cd: ChangeDetectorRef) {
		//this.filterSerivce.sendReferBranchRequest();
		//this.filterSerivce.sendWMBranchRequest();
	}

	ngOnInit() {
		//if (this.datalist)
		//	this.getKeywordList();

		//this.getKeywordList();
		//this.wmBranch = this.wmBranch.concat(this.filterSerivce.wmBranchList);
		//console.log('wmBranch', this.wmBranch);
		//this.referBranch = this.referBranch.concat(this.filterSerivce.referBranchList);
		//console.log('referBranch', this.referBranch);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.datalist) {
			this.getKeywordList();

			this.wmBranch = this.wmBranch.concat(this.wmBranchList);
			this.referBranch = this.referBranch.concat(this.referBranchList);
		}
	}

	chooseBranch(item: any) {
		this.nowBranch = item;
		if (item !== '經管行')
			this.wmBranchData.emit(item);
		else
			this.wmBranchData.emit('');
	}
	chooseForword(item: any) {
		this.nowForword = item;
		if (item !== '授信轉介行')
			this.referBranchData.emit(item);
		else
			this.referBranchData.emit('');
	}
	chooseData(eventArgs) {
		let inputData: StateGroup;
		inputData = eventArgs;
		if (inputData.type === '集團名稱')
			inputData.type = 'group_name';
		else if (inputData.type === '客戶名稱')
			inputData.type = 'cus_name';
		else if (inputData.type === '客戶 ID')
			inputData.type = 'cus_id';

		this.filterData.emit(inputData);

	}

	getKeywordList() {
		let newkeywordList = [];
		// get list
		const groupList: any = this.datalist.map(item => item.parentCompanyName);
		const cusIdList: any = this.datalist.map(item => item.customerId);
		const cusNameList: any = this.datalist.map(item => item.customerName);

		const referBranchList: any = this.datalist.map(item => item.loanTransferBranchName);
		const wmBranchList: any = this.datalist.map(item => item.manageBranchName);

		// get duplicates
		const gdList: any = groupList.filter((item, index) => groupList.indexOf(item) === index);
		const cidList: any = cusIdList.filter((item, index) => cusIdList.indexOf(item) === index);
		const cnameList: any = cusNameList.filter((item, index) => cusNameList.indexOf(item) === index);

		const referNameList: any = referBranchList.filter((item, index) => referBranchList.indexOf(item) === index);
		const wmNameList: any = wmBranchList.filter((item, index) => wmBranchList.indexOf(item) === index);

		// remove duplicates
		const glist: any = groupList.reduce((gdList, item) => gdList.includes(item) ? gdList : [...gdList, item], []);
		const clist: any = cusIdList.reduce((cidList, item) => cidList.includes(item) ? cidList : [...cidList, item], []);
		const nlist: any = cusNameList.reduce((cnameList, item) => cnameList.includes(item) ? cnameList : [...cnameList, item], []);

		const rlist: any = referBranchList.reduce((referNameList, item) => referNameList.includes(item) ? referNameList : [...referNameList, item], []);
		const wlist: any = wmBranchList.reduce((wmNameList, item) => wmNameList.includes(item) ? wmNameList : [...wmNameList, item], []);

		newkeywordList = [
			{
				type: 'group_name',
				list: glist
			},
			{
				type: 'cus_id',
				list: clist
			},
			{
				type: 'cus_name',
				list: nlist
			}
		];
		this.keywordList = newkeywordList;
		this.referBranchList = rlist;
		this.wmBranchList = wlist;
	}
}
