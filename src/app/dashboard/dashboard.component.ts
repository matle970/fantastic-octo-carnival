import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { PageEvent, MatTableDataSource, MatSort, MatSortable, Sort } from '@angular/material';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { IndexTableElement, DashboardDataService } from './service/dashboard-data.service';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { AoIdentityService } from '../services/common-services/ao-identity.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnChanges {
  [x: string]: any;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('sortTable') sortTable: MatSort;
    @Input() getKeyword: boolean;
    dataSource;
    dataList;
    tableDetailList: IndexTableElement[];
    columns;
    trade_balance_total_Value = 0;
    totalDataCount: number;
    supervisor = false;

    tableThead: string[] = [
        'ao',
        'group_name',
        'cus_name',
        'cus_id',
        'msr',
        'rorwa',
        'raroc',
        'last_year_contribution',
        'this_year_contribution',
        'deposit',
        'load_balance',
        'trade_balance'
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

    //inject service if dummdy data or adserver has trouble
    constructor(
        private dashboardService: DashboardService,
        private matPaginatorIntl: MatPaginatorIntl, 
        aoIdentity: AoIdentityService) {
        this.supervisor = true;
        this.dashboardService.sendRquest();
        aoIdentity.print();
    }


    ngOnChanges(changes: SimpleChanges) { }


    ngOnInit() {
        this.dataList = this.dashboardService.dataList;
        this.dataSource = this.dashboardService.dataSource;
        this.columns = this.dataList.slice();
        this.totalDataCount = this.dashboardService.totalDataCount;


        this.getIssues(0, 10);
        //console.log(this.sortTable);
        // 分頁切換時，重新取得資料
        this.paginator.page.subscribe((page: PageEvent) => {
            //console.log('click', page);
            this.getIssues(page.pageIndex, page.pageSize);
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
        this.dataSource.sortData = (data, sort: MatSort) => {
            return this.dashboardService.getSortedData(this.nowOrder.id, this.nowOrder.ASC, data);
        }
        this.trade_balance_total_Value
    }
    /*openNotice(){
      this.openStatus = true;
      this.openStatusChange.emit(true);
      console.log('open',this.openStatus);
    }*/

    sortData(event: any) {
        //console.log(event);
        this.nowOrder.id = event.active;
        if (event.direction === 'asc')
            this.nowOrder.ASC = '1';
        else if (event.direction === 'desc')
            this.nowOrder.ASC = '2';
        else
            this.nowOrder.ASC = '0';
    }

    getIssues(pageIndex, pageSize) {
        this.dataSource.sort = this.sortTable;

    }

    pageChange(event: any) {
        //console.log(event);
    }

    onFilterChanged(eventArgs) {
        //console.log("Filter: ", eventArgs);
    }
    
    onCusNameClick(value) {
        this.dashboardService.setCustomerInfo(value);
        //console.log('onCustomerClick', value);
    }

    public calculateTotal(key) {
        return this.columns.reduce((accum, curr) => (Number(accum) || 0) + (Number(curr[key]) || 0), 0);
    }
}

