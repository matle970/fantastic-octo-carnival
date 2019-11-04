import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter} from '@angular/core';
import { PageEvent, MatTableDataSource, MatSort } from '@angular/material';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnChanges {

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  @Input() getKeyword: boolean;
  @Output() openStatusChange = new EventEmitter<boolean>();
  openStatus = false;

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

  dataSource = new MatTableDataSource<IndexTableElement>(TABLE_LIST);



  /**
   * ASC: 0 no arrow
   * ASC: 1 arror up
   * ASC: 3 arror down
   */
  nowOrder = {
    id: 'group_name',
    ASC: '1'
  };


  tableThList = [
    {
      id: 'ao',
      name: '經管 AO'
    },
    {
      id: 'group_name',
      name: '集團名稱'
    },

    {
      id: 'cus_name',
      name: '客戶名稱'
    },
    {
      id: 'cus_id',
      name: '客戶ID'
    },

    {
      id: 'msr',
      name: 'MSR'
    },
    {
      id: 'rorwa',
      name: 'RORWA'
    },
    {
      id: 'raroc',
      name: 'RAROC'
    },
    {
      id: 'last_year_contribution',
      name: '去年度累計貢獻度'
    },
    {
      id: 'this_year_contribution',
      name: '今年度累計貢獻度'
    },
    {
      id: 'deposit',
      name: '存款餘額'
    },
    {
      id: 'load_balance',
      name: '放款餘額'
    },
    {
      id: 'trade_balance',
      name: '貿融餘額'
    }
  ];

  constructor(private matPaginatorIntl: MatPaginatorIntl) {}

  ngOnChanges(changes: SimpleChanges) {


  }


  ngOnInit() {
    this.getIssues(0, 10);


    console.log(this.sortTable);
    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe((page: PageEvent) => {
      console.log('click', page);
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

  }

  openNotice(){
    this.openStatus = true;
    this.openStatusChange.emit(true);
    console.log('open',this.openStatus);
  }

  
  sortData(event: any) {
    console.log(event);
    this.nowOrder.id = event.active ;
    if(event.direction === 'asc')
      this.nowOrder.ASC = '1';
    else if(event.direction === 'desc')
      this.nowOrder.ASC = '2';
    else
      this.nowOrder.ASC = '0';
  }

  getIssues(pageIndex, pageSize) {
    this.dataSource.sort = this.sortTable;
    // console.log(this.sortTable);
  }

  pageChange (event: any) {
    console.log(event);

  }

  // orderByThis(typeId: string) {
  //   console.log(typeId);
  //   if (this.nowOrder.id == typeId) {
  //     this.nowOrder.ASC = !this.nowOrder.ASC;
  //     this.nowOrder.id = typeId;
  //     this.sortBy(typeId);
  //   } else {
  //     this.nowOrder.ASC = true;
  //     this.nowOrder.id = typeId;
  //     this.sortBy(typeId);
  //   }
  // }

  // sortBy(key: string) {
  //   console.log('now Sort', key);
  //   const asc = this.nowOrder.ASC;
  //   console.log(this.dataSource)
  //   return this.dataSource.sort(function(a, b) {
  //     const ai = isNaN(a[key]) ? a[key].charCodeAt(0) : a[key];
  //     const bi = isNaN(b[key]) ? b[key].charCodeAt(0) : b[key];
  //     return asc ? ai - bi : bi - ai;
  //   });
  // }
}

export interface IndexTableElement {
  id: string;
  ao: string;
  group_name: string;
  cus_id: string;
  cus_name: string;
  msr: string;
  rorwa: string;
  raroc: string;
  last_year_contribution: string;
  this_year_contribution: string;
  deposit: string;
  load_balance: string;
  trade_balance: string;
  tag: any;
};



const TABLE_LIST:IndexTableElement[] = [
  {
    id: 'd001',
    ao: '人類經理 具燦星',
    group_name: '滿月集團',
    cus_id: '03546618',
    cus_name: '德魯納股份有限公司',
    msr: '4',
    rorwa: '0.36%',
    raroc: '0.36%',
    last_year_contribution: '10000',
    this_year_contribution: '9000',
    deposit: '1000000',
    load_balance: '600000',
    trade_balance: '3000',
    tag: [1, 2, 3]
  },
  {
    id: 'd002',
    ao: '店長 鄭北東',
    group_name: '滿月集團',
    cus_id: '11223355',
    cus_name: '千里馬超市',
    msr: '4',
    rorwa: '0.56%',
    raroc: '0.36%',
    last_year_contribution: '100',
    this_year_contribution: '500',
    deposit: '100000',
    load_balance: '60000',
    trade_balance: '3000',
    tag: [2, 3]
  },
  {
    id: 'd003',
    ao: '酒保 金時翼',
    group_name: '滿月集團',
    cus_id: '11223355',
    cus_name: '天空酒吧',
    msr: '4',
    rorwa: '0.56%',
    raroc: '0.36%',
    last_year_contribution: '50000',
    this_year_contribution: '500',
    deposit: '100',
    load_balance: '60000',
    trade_balance: '3000',
    tag: [2, 3]
  },

  {
    id: 'c001',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '03546618',
    cus_name: '廣宇科技股份有限公司',
    msr: '4',
    rorwa: '0.36%',
    raroc: '0.36%',
    last_year_contribution: '1000',
    this_year_contribution: '900',
    deposit: '10000',
    load_balance: '2000',
    trade_balance: '3000',
    tag: [1, 2, 3]
  },
  {
    id: 'c002',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '12800225',
    cus_name: '群創光電股份有限公司',
    msr: 'D',
    rorwa: '',
    raroc: '',
    last_year_contribution: '1000',
    this_year_contribution: '900',
    deposit: '',
    load_balance: '2000',
    trade_balance: '3000',
    tag: [1]
  },
  {
    id: 'c003',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '80731387',
    cus_name: '宏瀚投資股份有限公司',
    msr: '4',
    rorwa: '0.85%',
    raroc: '0.85%',
    last_year_contribution: '',
    this_year_contribution: '',
    deposit: '',
    load_balance: '',
    trade_balance: '',
    tag: [1, 2]
  },
  {
    id: 'c004',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '80732007',
    cus_name: '聯巨投資股份有限公司',
    msr: '6+',
    rorwa: '0.74%',
    raroc: '0.74%',
    last_year_contribution: '',
    this_year_contribution: '',
    deposit: '',
    load_balance: '',
    trade_balance: '',
    tag: [3]
  },
  {
    id: 'c005',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '84149499',
    cus_name: '天鈺科技股份有限公司',
    msr: '5',
    rorwa: '6.22%',
    raroc: '6.22%',
    last_year_contribution: '',
    this_year_contribution: '',
    deposit: '',
    load_balance: '',
    trade_balance: '',
    tag: [4]
  },
  {
    id: 'c006',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '496390JA',
    cus_name: '捷達創新科技有限公司',
    msr: 'W2',
    rorwa: '',
    raroc: '',
    last_year_contribution: '',
    this_year_contribution: '',
    deposit: '',
    load_balance: '',
    trade_balance: '',
    tag: [5]
  },
  {
    id: 'c007',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '27310561',
    cus_name: '啟耀光電股份有限公司',
    msr: '8',
    rorwa: '',
    raroc: '',
    last_year_contribution: '',
    this_year_contribution: '',
    deposit: '',
    load_balance: '',
    trade_balance: '',
    tag: []
  },

  {
    id: 'c008',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '28488592',
    cus_name: '瑞祺電通股份有限公司',
    msr: '5',
    rorwa: '',
    raroc: '',
    last_year_contribution: '',
    this_year_contribution: '',
    deposit: '',
    load_balance: '',
    trade_balance: '',
    tag: []
  },
  {
    id: 'c009',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '70380046',
    cus_name: '樺漢科技股份有限公司',
    msr: '4+',
    rorwa: '0.43%',
    raroc: '0.43%',
    last_year_contribution: '',
    this_year_contribution: '',
    deposit: '',
    load_balance: '',
    trade_balance: '',
    tag: []
  },
  {
    id: 'c010',
    ao: '企企2 葉又萱',
    group_name: '鴻海集團',
    cus_id: '24291669',
    cus_name: '康聯生醫科技股份有限公司',
    msr: '6',
    rorwa: '1.98%',
    raroc: '1.98%',
    last_year_contribution: '',
    this_year_contribution: '',
    deposit: '',
    load_balance: '',
    trade_balance: '',
    tag: []
  }
];
