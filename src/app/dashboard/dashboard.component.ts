import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  orderType =  'group_name';
  orderASC = true;
  nowOrder = {
    id:'group_name',
    ASC : true
  };

  tableThList = [

    {
      id:'group_name',
      name: '集團名稱',
    },
    {
      id:'cus_id',
      name: '客戶ID',

    },
    {
      id:'cus_name',
      name: '客戶名稱',

    },
    {
      id:'msr',
      name: 'MSR',

    },
    {
      id:'rorwa',
      name: 'RORWA',

    },
    {
      id:'raroc',
      name: 'RAROC',

    },
    {
      id:'last_year_contribution',
      name: '去年度累計貢獻度',

    },
    {
      id:'this_year_contribution',
      name: '今年度累計貢獻度',

    },
    {
      id:'deposit',
      name: '存款餘額',

    },
    {
      id:'load_balance',
      name: '放款餘額',

    },
    {
      id:'trade_balance',
      name: '貿融餘額',
    },

  ];

  tableDetailList =[
    {
      id: 'c001',
      group_name: '鴻海集團',
      cus_id: '03546618',
      cus_name: '廣宇科技股份有限公司',
      msr: '4',
      rorwa: '0.36%',
      raroc: '0.36%',
      last_year_contribution: '1,000',
      this_year_contribution: '900',
      deposit: '10,000',
      load_balance: '2000',
      trade_balance: '3000',
      tag: [1, 2, 3]
    },
    {
      id: 'c002',
      group_name: '鴻海集團',
      cus_id: '12800225',
      cus_name: '群創光電股份有限公司',
      msr: 'D',
      rorwa: '',
      raroc: '',
      last_year_contribution: '1,000',
      this_year_contribution: '900',
      deposit: '',
      load_balance: '2000',
      trade_balance: '3000',
      tag: [1]
    },
    {
      id: 'c003',
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
    },

  ];

  constructor() { }

  ngOnInit() {
  }

  orderByThis(typeId) {
    console.log(typeId);
    if(this.nowOrder.id == typeId){
      this.nowOrder.ASC = !this.nowOrder.ASC
    } else {
      this.nowOrder.ASC = true;
    }
    this.nowOrder.id = typeId;
  }

}
