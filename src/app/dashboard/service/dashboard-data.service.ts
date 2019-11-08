import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  getDashboardDataTable() {
    return tableDetailList;  
  }
  constructor() {}
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
let receivedData: any;


const tableDetailList:IndexTableElement[] = [
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
  },
  {
    id: 'c011',
    ao: '企企2 jeweltest01',
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