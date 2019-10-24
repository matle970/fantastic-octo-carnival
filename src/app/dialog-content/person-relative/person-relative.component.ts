import { Component, OnInit } from '@angular/core';

export interface person {
  name: string;
  pid: string;
}

export interface debt {
  type: string;
  account: string;
  currency: string;
  amount: string;
  total: string;
  note: string;
}

@Component({
  selector: 'app-person-relative',
  templateUrl: './person-relative.component.html',
  styleUrls: ['./person-relative.component.scss']
})
export class PersonRelativeComponent implements OnInit {
  selected = '林金霖 A123456789';

  pList = [
    '林金霖 A123456789',
    '李知恩 A2111222333',
    '呂珍九 A1111222333'
  ];

  personList: person[] = [
    {
      name: '林金霖',
      pid: 'A123456789'
    },
    {
      name: '李知恩',
      pid: 'A2111222333'
    },
    {
      name: '呂珍九',
      pid: 'A1111222333'
    },
    {
      name: '張藝琳',
      pid: 'A2456789132'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  selectPerson (item: any) {
    this.selected = item;
  }

}
