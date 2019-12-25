import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageEvent, MatTableDataSource, MatSort, MatSortable, Sort } from '@angular/material';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { IndexTableElement } from './service/dashboard-data.service';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { AoIdentityService } from '../services/common-services/ao-identity.service';
import { StateGroup } from '../content-layout/common-area/auto-search/auto-search.component';
import { filter } from 'rxjs/operators';
import { DateUtilService } from '../services/date-util.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnChanges {
    [x: string]: any;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('sortTable') sortTable: MatSort;
    @Input() getKeyword: any;
    filterJson = {
        'referBranch': '',
        'wmBranch': '',
        'inputFilter': { 'inputType': 'group_name', 'inputValue': '' }
    };
    filterArgs: StateGroup;
    dataSource;
    dataList;
    totalDataCount: number;
    supervisor = false;

    globalFilter;
    tableThead: string[] = [
        'aoEmpName',
        'parentCompanyName',
        'customerName',
        'customerId',
        'approvalGrade',
        'rorwa',
        'raroc',
        'lastYearAccumContri',
        'thisYearAccumContri',
        'totalDepositBal',
        'totalLoanBal',
        'totalTradeFinanceBal'
    ];
    /**
      * ASC: 0 no arrow
      * ASC: 1 arrow up
      * ASC: 2 arrow down
      */
    nowOrder = {
        id: 'group_name',
        ASC: '1'
    };


    public loadingStatus: boolean = true;
    public statusCode: boolean;
    public hideBlock: boolean;
    public hasResult: boolean;
    public nodata: string;

    yesterdayDate: string;
    lastDecember: string;
    lastMonth: string;

    constructor(
        private dashboardService: DashboardService,
        private matPaginatorIntl: MatPaginatorIntl,
        aoIdentity: AoIdentityService,
        private dateUtilService : DateUtilService ) {
        this.supervisor = true;
        aoIdentity.print();
    }

    async ngOnChanges(changes: SimpleChanges) { }

    async ngOnInit() {
        this.yesterdayDate = this.dateUtilService.yesterdayDate;
        this.lastDecember = this.dateUtilService.lastDecember;
        this.lastMonth = this.dateUtilService.lastMonth;
        
        let result = await this.dashboardService.sendRquest();
        this.dataList = result.body.records;
        console.log('data', this.dataList);
        this.dataSource = new MatTableDataSource<IndexTableElement>(this.dataList)
        this.totalDataCount = this.dataList.length;
        this.keywordList = this.dataList;
        this.getSortData();
        this.getIssues();
        this.checkResult(); //TODO check return code

        // 分頁切換時，重新取得資料
        this.paginator.page.subscribe((page: PageEvent) => {
            this.getIssues();
        });

        // 設定顯示筆數資訊文字
        this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
            if (length === 0 || pageSize === 0) {
                return `第 0 筆、共 ${length} 筆`;
            }

            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

            return `第 ${startIndex + 1} - ${endIndex} 筆、共 ${length} 筆`;
        };

        // 設定其他顯示資訊文字
        this.matPaginatorIntl.itemsPerPageLabel = '每頁筆數：';
        this.matPaginatorIntl.nextPageLabel = '下一頁';
        this.matPaginatorIntl.previousPageLabel = '上一頁';

        this.dataSource.paginator = this.paginator;
    }
    ngAfterViewInit() {
        if (this.dataSource)
            this.getSortData();
    }
    /*openNotice(){
      this.openStatus = true;
      this.openStatusChange.emit(true);
      console.log('open',this.openStatus);
    }*/

    sortData(event: any) {
        this.nowOrder.id = event.active;
        if (event.direction === 'asc')
            this.nowOrder.ASC = '1';
        else if (event.direction === 'desc')
            this.nowOrder.ASC = '2';
        else
            this.nowOrder.ASC = '0';
    }

    getIssues() {
        this.dataSource.sort = this.sortTable;

    }
    pageChange(event: any) {
        //console.log(event);
    }

    //Filter
    onFilterReferBrandChanged(filterValue) {
        const filters = filterValue.trim().toLowerCase();
        this.filterJson.referBranch = filters;
        this.customFilterPredicate();
        
        this.dataSource.filter = JSON.stringify(this.filterJson);
        this.checkResult();
    }
    onFilterWMBrandChanged(filterValue) {
        const filters = filterValue.trim().toLowerCase();
        this.filterJson.wmBranch = filters;
        this.customFilterPredicate();
        
        this.dataSource.filter = JSON.stringify(this.filterJson);
        this.checkResult();
    }
    onFilterDataChanged(filterValue) {
        this.filterArgs = filterValue;
        let filters = '';
        if (filterValue.names) {
            filters = filterValue.names.trim().toLowerCase();

            this.filterJson.inputFilter.inputType = filterValue.type;
            this.filterJson.inputFilter.inputValue = filters;
        }
        else {
            this.filterJson.inputFilter.inputType = 'group_name';
            this.filterJson.inputFilter.inputValue = filterValue.trim();
        }
        this.customFilterPredicate();
        
        this.dataSource.filter = JSON.stringify(this.filterJson);
        this.checkResult();
    }

    customFilterPredicate() {
        this.dataSource.filterPredicate =
            (data?: IndexTableElement, filters?: string) => {
                const matchFilter = [];
                //let temp = this.filterJson.inputFilter.inputValue + '+' + this.filterJson.referBranch + this.filterJson.wmBranch;
                let temp = this.filterJson.inputFilter.inputValue;
                const filterArray = temp.split('+');
                const columns = (<any>Object).values([data.parentCompanyName, data.customerId, data.customerName, data.manageBranchName, data.loanTransferBranchName]);
                // OR be more specific [data.name, data.race, data.color];
        
                filterArray.forEach(filter => {
                    const customFilter = [];
                    columns.forEach(column => customFilter.push(column.toLowerCase().includes(filter)));
                    matchFilter.push(customFilter.some(Boolean)); // OR
                });
                return matchFilter.every(Boolean) == true
                    && data.loanTransferBranchName.toString().trim().toLocaleLowerCase().indexOf(this.filterJson.referBranch.toLocaleLowerCase()) !== -1
                    && data.manageBranchName.toString().trim().toLocaleLowerCase().indexOf(this.filterJson.wmBranch.toLocaleLowerCase()) !== -1; // AND
            }
    }

    public calculateTotal(key) {
        //let filterType;
        let sum: number = 0;
        if(this.dataSource) {
            return this.dataSource.filteredData.slice().reduce((accum, curr) => (Number(accum) || 0) + (Number(curr[key]) || 0), 0);
        }
        return sum;
    }
    getSortData() {
        this.dataSource.sortData = (data, sort: MatSort) => {
            return this.dashboardService.getSortedData(this.nowOrder.id, this.nowOrder.ASC, data);
        }
    }
    checkResult() {
        if(this.dataSource.filteredData.length === 0) {
            this.nodata = '無符合條件之客戶';
            this.hideBlock = true;
            this.hasResult = false;
            this.loadingStatus = false;
        }
        else {
            this.nodata = '';
            this.hideBlock = false;
            this.hasResult = true;
            this.loadingStatus = false;
        }
    }
}

