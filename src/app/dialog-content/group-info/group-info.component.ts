import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {
  @Input() content: any;

  groupColumns = ['cus_id', 'cus_name', 'type', 'mount', 'total'];
  groupSources = GROUP_DATA;

  group_title = [
    {
      id: 'cus_id',
      name: '客戶 ID',
    },
    {
      id: 'cus_name',
      name: '客戶名稱',
    },
    {
      id:'type',
      name: '額度種類'
    },
    {
      id: 'mount',
      name: '額度'
    },
    {
      id: 'total',
      name: '餘額'
    }
  ];

  group_list = [
    {
      id:'001',
      cus_id: '24291669',
      cus_name: '康聯生醫科技股份有限公司',
      mount: '1000',
      total: '500'
    },
    {
      id:'002',
      cus_id: '54060567',
      cus_name: '捷達創新股份有限公司',
      mount: '2000',
      total: '2000'
    },
    {
      id:'003',
      cus_id: '80731387',
      cus_name: '宏瀚投資股份有限公司',
      mount: '1000',
      total: '500'
    },
    {
      id:'004',
      cus_id: '80732007',
      cus_name: '聯巨投資股份有限公司',
      mount: '1500',
      total: '500'
    },
    {
      id:'005',
      cus_id: '84149499',
      cus_name: '天鈺科技股份有限公司',
      mount: '1000',
      total: '0'
    },
    {
      id:'006',
      cus_id: '89898339',
      cus_name: '富康國際投資股份有限公司',
      mount: '1500',
      total: '0'
    },

  ]



  constructor() { }

  ngOnInit() {
  }

}

export interface GroupElement {
  id: string;
  cus_id: string;
  cus_name: string;
  mount: string;
  total: string;
}

const GROUP_DATA: GroupElement[] = [
  {
    id: '001',
    cus_id: '24291669',
    cus_name: '康聯生醫科技股份有限公司',
    mount: '1000',
    total: '500'
  },
  {
    id: '002',
    cus_id: '54060567',
    cus_name: '捷達創新股份有限公司',
    mount: '2000',
    total: '2000'
  },
  {
    id: '003',
    cus_id: '80731387',
    cus_name: '宏瀚投資股份有限公司',
    mount: '1000',
    total: '500'
  },
  {
    id: '004',
    cus_id: '80732007',
    cus_name: '聯巨投資股份有限公司',
    mount: '1500',
    total: '500'
  },
  {
    id:'005',
    cus_id: '84149499',
    cus_name: '天鈺科技股份有限公司',
    mount: '1000',
    total: '0'
  },
  {
    id: '006',
    cus_id: '89898339',
    cus_name: '富康國際投資股份有限公司',
    mount: '1500',
    total: '0'
  },
];


