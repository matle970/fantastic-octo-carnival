import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})


export class FilterComponent implements OnInit, OnChanges {

  @Input() datalist: DashboardComponent;

  @ViewChild('keyword') keyword: string;

  firstKeyChange = true;
  lastKeyword: string;


  nowBranch = '經管行';
  nowForword = '授信轉介行';

  branch = ['全部','敦化分行','信義分行','大安分行'];
  branch2 = ['全部','內湖分行','中正分行','淡水分行'];

  ao_list = [];
  group_list = [];
  cus_name = [];
  cus_id =[];



  myKeyword = '';

  constructor() { }

  ngOnInit() {
    // this.fiterData();
    // $('.dropdown-toggle').dropdown();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('change',changes);
    // this.firstKeyChange = changes['keyword'].firstChange;
    // this.lastKeyword = changes['keyword'].previousValue;


  }

  // fiterData () {
  //   console.log(this.datalist.data);
  //   const data = this.datalist.data;
  //   this.ao_list = data.map(function(item: any){
  //     return item.ao;
  //   });
  //   this.group_list = data.map(function(item: any){
  //     return item.group_name;
  //   });
  //   this.cus_name = data.map(function(item: any){
  //     return item.cus_name;
  //   });
  //   this.cus_id = data.map(function(item: any){
  //     return item.cus_id;
  //   });


  //   this.ao_list = this.ao_list.filter((item, index) => this.ao_list.indexOf(item) === index);
  //   this.group_list = this.group_list.filter((item, index) => this.group_list.indexOf(item) === index);
  //   this.cus_name = this.cus_name.filter((item, index) => this.cus_name.indexOf(item) === index);
  //   this.cus_id = this.cus_id.filter((item, index) => this.cus_id.indexOf(item) === index);

  // }

  chooseBranch (item: any) {
    this.nowBranch = item;
  }
  chooseForword (item: any) {
    this.nowForword = item;
  }
}
