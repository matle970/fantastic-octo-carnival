import { Component, OnInit, ViewChild, Input, Output, EventEmitter,   OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-notice-modal',
  templateUrl: './notice-modal.component.html',
  styleUrls: ['./notice-modal.component.scss']
})
export class NoticeModalComponent implements OnInit, OnChanges {

  @ViewChild('notice') notice: any;
  @Input() notice: number;
  @Input() getOpenStatus: boolean;
  private _getOpenStatus: boolean;
  @Output() getOpenStatusChange = new EventEmitter<boolean>();

  contentData: any;

  NoticeOpen = false;

  // 假資料 首頁關鍵提醒
  notice_one = {
    date:'2019/06/18',
    type_list:[
      {
        id:'all',
        name:'全部',
        total:7,
      },
      {
        id:'alert',
        name:'警示通知',
        total:'2',
      },
      {
        id:'trade',
        name:'交易提醒',
        total:'2',
      },
      {
        id:'news',
        name:'企業訊息與公告',
        total:'3',
      },

    ],
    data_list:[
      {
        id:'n001',
        type:'alert',
        type_name:'警示通知',
        time:'2019/06/18',
        company:'廣宇科技股份有限公司',
        new_title:'企企股份有限公司自花旗銀行匯入美金 $80,569'
      },
      {
        id:'n002',
        type:'trade',
        type_name:'到期提醒',
        time:'2019/04/18',
        company:'群創光電股份有限公司',
        new_title:'2019/05/18 Call Loan 新臺幣 $1,000,000 到期'
      },
      {
        id:'n003',
        type:'trade',
        type_name:'到期提醒',
        time:'2019/03/18',
        company:'宏瀚投資股份有限公司',
        new_title:' 2019/04/18 定存美金 $30,000,000 到期'
      },

      {
        id:'n004',
        type:'news',
        type_name:'企業訊息與公告',
        time:'2019/02/15',
        company:'聯巨投資股份有限公司',
        new_title:'2019/07/29 舉辦法說會'
      },

      {
        id:'n005',
        type:'news',
        type_name:'企業訊息與公告',
        time:'2019/02/15',
        company:'聯巨投資股份有限公司',
        new_title:'2019/07/29 舉辦法說會'
      },

      {
        id:'n006',
        type:'news',
        type_name:'企業訊息與公告',
        time:'2019/02/15',
        company:'聯巨投資股份有限公司',
        new_title:'2019/07/29 舉辦法說會'
      },


    ]
  };
  // 假資料 公司的關鍵提醒
  notice_two = {
    date:'2019/06/18',
    type_list:[
      {
        id:'all',
        name:'全部',
        total:7,
      },
      {
        id:'alert',
        name:'警示通知',
        total:'2',
      },
      {
        id:'trade',
        name:'交易提醒',
        total:'2',
      },
      {
        id:'news',
        name:'企業訊息與公告',
        total:'3',
      },

    ],
    data_list:[
      {
        id:'n001',
        type:'alert',
        type_name:'警示通知',
        time:'2019/06/18',
        company:'千里馬股份有限公司',
        new_title:'千里馬股份有限公司自花旗銀行匯入美金 $80,569'
      },
      {
        id:'n002',
        type:'trade',
        type_name:'到期提醒',
        time:'2019/04/18',
        company:'千里馬股份有限公司',
        new_title:'2019/05/18 Call Loan 新臺幣 $1,000,000 到期'
      },
      {
        id:'n003',
        type:'trade',
        type_name:'到期提醒',
        time:'2019/03/18',
        company:'千里馬股份有限公司',
        new_title:' 2019/04/18 定存美金 $30,000,000 到期'
      },

      {
        id:'n004',
        type:'news',
        type_name:'企業訊息與公告',
        time:'2019/02/15',
        company:'千里馬股份有限公司',
        new_title:'2019/07/29 舉辦法說會'
      },

      {
        id:'n005',
        type:'news',
        type_name:'企業訊息與公告',
        time:'2019/02/15',
        company:'千里馬股份有限公司',
        new_title:'2019/07/29 舉辦法說會'
      },

      {
        id:'n006',
        type:'news',
        type_name:'企業訊息與公告',
        time:'2019/02/15',
        company:'千里馬股份有限公司',
        new_title:'2019/07/29 舉辦法說會'
      },


    ]
  }
  constructor() { }

  ngOnInit() {
    this.getOpenStatus = this.getOpenStatus ? true : false;
  }

  ngOnChanges( changes: SimpleChanges){
    console.log(changes);
    this.NoticeOpen = changes.getOpenStatus.currentValue;
    if ( this.notice == 1){
      this.contentData = this.notice_one;
    } else {
      this.contentData = this.notice_two;
    }

  }
  openModal() {
    this.NoticeOpen = true;
    this.getOpenStatus = true;
    this.getOpenStatusChange.emit(true);
  }

  closeModal() {
    this.NoticeOpen = false;
    this.getOpenStatus = false;
    this.getOpenStatusChange.emit(false);
  }

}
