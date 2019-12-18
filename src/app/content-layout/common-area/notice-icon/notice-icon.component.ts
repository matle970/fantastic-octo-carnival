import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/content-layout/common-area/dialog/dialog.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { NoticeService } from 'src/app/services/common-area/notice.service';
@Component({
    selector: 'app-notice-icon',
    templateUrl: './notice-icon.component.html',
    styleUrls: ['./notice-icon.component.scss']
})
export class NoticeIconComponent implements OnInit {


    @Input() notice: number;    //TODO
    @Input() modalId: number;   //TODO
    @Input('datalist') datalist: DashboardComponent;
    cusIdList: string[];
    // 假資料 首頁關鍵提醒
    notice_one = {
        date: '2019/06/18',
        type_list: [
            {
                id: 'all',
                name: '全部',
                total: 7,
            },
            {
                id: 'alert',
                name: '警示通知',
                total: '2',
            },
            {
                id: 'trade',
                name: '交易提醒',
                total: '2',
            },
            {
                id: 'news',
                name: '企業訊息與公告',
                total: '3',
            },

        ],
        data_list: [
            {
                id: 'n001',
                type: 'alert',
                type_name: '警示通知',
                time: '2019/06/18',
                company: '廣宇科技股份有限公司',
                new_title: '企企股份有限公司自花旗銀行匯入美金 $80,569'
            },
            {
                id: 'n002',
                type: 'trade',
                type_name: '到期提醒',
                time: '2019/04/18',
                company: '群創光電股份有限公司',
                new_title: '2019/05/18 Call Loan 新台幣 $1,000,000 到期'
            },
            {
                id: 'n003',
                type: 'trade',
                type_name: '到期提醒',
                time: '2019/03/18',
                company: '宏瀚投資股份有限公司',
                new_title: ' 2019/04/18 定存美金 $30,000,000 到期'
            },

            {
                id: 'n004',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '聯巨投資股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },

            {
                id: 'n005',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '聯巨投資股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },

            {
                id: 'n006',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '聯巨投資股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },


        ]
    }

    // 假資料 公司的關鍵提醒
    notice_two = {
        date: '2019/06/18',
        type_list: [
            {
                id: 'all',
                name: '全部',
                total: 7,
            },
            {
                id: 'alert',
                name: '警示通知',
                total: '2',
            },
            {
                id: 'trade',
                name: '交易提醒',
                total: '2',
            },
            {
                id: 'news',
                name: '企業訊息與公告',
                total: '3',
            },

        ],
        data_list: [
            {
                id: 'n001',
                type: 'alert',
                type_name: '警示通知',
                time: '2019/06/18',
                company: '千里馬股份有限公司',
                new_title: '千里馬股份有限公司自花旗銀行匯入美金 $80,569'
            },
            {
                id: 'n002',
                type: 'trade',
                type_name: '到期提醒',
                time: '2019/04/18',
                company: '千里馬股份有限公司',
                new_title: '2019/05/18 Call Loan 新台幣 $1,000,000 到期'
            },
            {
                id: 'n003',
                type: 'trade',
                type_name: '到期提醒',
                time: '2019/03/18',
                company: '千里馬股份有限公司',
                new_title: ' 2019/04/18 定存美金 $30,000,000 到期'
            },

            {
                id: 'n004',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '千里馬股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },

            {
                id: 'n005',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '千里馬股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },

            {
                id: 'n006',
                type: 'news',
                type_name: '企業訊息與公告',
                time: '2019/02/15',
                company: '千里馬股份有限公司',
                new_title: '2019/07/29 舉辦法說會'
            },


        ]
    }

    constructor(public dialog: MatDialog, private noticeService : NoticeService) { }

    async ngOnChanges(changes: SimpleChanges) {
        if (this.datalist) {
            this.getCustomerIdList();
            //TODO send request
            //let result = await this.noticeService.sendRquest();
        }
    }

    ngOnInit(): void {
    }
    openDialog() {

        const openId = this.modalId ? this.modalId : 1;
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;
        dialogConfig.panelClass = 'all-notice-dialog';
        dialogConfig.data = {
            id: openId,
            title: '關鍵提醒',
            content_data: {}
        };

        if (openId === 1) {
            dialogConfig.data.content_data = this.notice_one;
        } else if (openId === 2) {
            dialogConfig.data.content_data = this.notice_two;
        }

        this.dialog.open(DialogComponent, dialogConfig);
    }

    getCustomerIdList() {
        const cusIdList: any = this.datalist.map(item => item.cus_id);
        this.cusIdList = cusIdList;
    }
}


