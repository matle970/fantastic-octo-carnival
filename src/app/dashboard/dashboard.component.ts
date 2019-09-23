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
      ASC:true,
    },
    {
      id:'cus_id',
      name: '客戶ID',
      ASC:true,
    },
    {
      id:'cus_name',
      name: '客戶名稱',
      ASC:true,
    },
    {
      id:'msr',
      name: 'MSR',
      ASC:true,
    },
    {
      id:'rorwa',
      name: 'RORWA',
      ASC:true,
    },
    {
      id:'raroc',
      name: 'RAROC',
      ASC:true,
    },
    {
      id:'last_year_contribution',
      name: '去年度累計貢獻度',
      ASC:true,
    },
    {
      id:'this_year_contribution',
      name: '今年度累計貢獻度',
      ASC:true,
    },
    {
      id:'deposit',
      name: '存款餘額',
      ASC:true,
    },
    {
      id:'load_balance',
      name: '放款餘額',
      ASC:true,
    },
    {
      id:'trade_balance',
      name: '貿融餘額',
      ASC:true,
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
    },

  ];

  constructor() { }

  ngOnInit() {
  }

  orderByThis(typeId) {
    console.log(typeId);
    this.nowOrder.id = typeId;
    if(this.nowOrder.id == typeId){
      this.nowOrder.ASC = !this.nowOrder.ASC
    }
  }

}
