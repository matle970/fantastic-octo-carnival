import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsService } from '../../../services/customer/cust-news/news.service';
import { DialogService } from '../../../services/common-services/dialog.service';
@Component({
    selector: 'app-cust-news',
    templateUrl: './cust-news.component.html',
    styleUrls: ['./cust-news.component.scss']
})

export class NewsComponent implements OnInit {

    constructor(
        private newsService: NewsService,
        private dialogService: DialogService,
        public dialog: MatDialog,
    ) {
        this.newsService.sendRquest();
    }

    displayedColumns = ['date', 'tag', 'title'];

    // 新聞列表
    newsSources: any = [];

    bankColumns = ['bank', 'valChange', 'totalChange'];

    // 銀行列表
    bankSource: any = [];

    // 上次查詢日期
    PreDate: Date;

    // 最近查詢日期
    LastDate: Date;

    // text
    text = this.newsService.baseService.gettextservice.custnewstext;
    news_Title: string = this.text.cust_news.news_Title;
    date_Title: string = this.text.cust_news.date_Title;
    title_Title: string = this.text.cust_news.title_Title;
    bankinfo_Title: string = this.text.cust_news.bankinfo_Title;
    last_Search: string = this.text.cust_news.last_Search;
    recent_Search: string = this.text.cust_news.recent_Search;
    valChange: string = this.text.cust_news.valChange;
    totalChange: string = this.text.cust_news.totalChange;

    ngOnInit() {

        this.getNewsDate();
    }

    getNewsDate() {
        this.newsSources = this.newsService.newsSources;
        this.bankSource = this.newsService.banksSources;
        this.PreDate = this.newsService.PreDate;
        this.LastDate = this.newsService.LastDate;
    }

    openDialog(id: number, wide?: boolean, datatype?: string, itemId?: string) {
        let data: object;
        let title: string;
        switch (datatype) {
            case 'news':
                data = this.newsService._newsSources;
                title = this.date_Title;
                break;
            case 'bankinfo':
                data = this.newsService._banksSources;
                title = this.bankinfo_Title;
        }
        this.dialogService.openDialog(id, wide, title, data, itemId);
    }

}
