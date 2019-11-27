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

    get text() {
        return this._text;
    }

    get custbaseinfotext() {
        return this._custbaseinfotext;
    }
}
