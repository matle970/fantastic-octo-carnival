import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GettextService {

    constructor() { }

    // text
    private _text: any = require('src/app/objects/text/text.json');

    // custbaseinfo_text
    private _custbaseinfotext: any = require('src/app/objects/text/cust-baseinfo-text.json');

    // custnews_text
    private _custnewstext: any = require('src/app/objects/text/cust-news-text.json');

    // custcharts_text
    private _custchartstext: any = require('src/app/objects/text/cust-charts-text.json');

    // custnews_text
    private _custhistorytext: any = require('src/app/objects/text/cust-history-text.json');

    //sidebar_config
    private _sidebarconfig: any = require('../../../assets/config/sidebarConfig.json')

    get text() {
        return this._text;
    }

    get custbaseinfotext() {
        return this._custbaseinfotext;
    }

    get custnewstext() {
        return this._custnewstext;
    }

    get custchartstext() {
        return this._custchartstext;
    }

    get custhistorytext() {
        return this._custhistorytext;
    }

    get sidebarconfig(){
        return this._sidebarconfig;
    }
}
