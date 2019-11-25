import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GettextService {

    constructor() { }

    // text
    private _text: any = require('src/app/objects/text/text.json');

    get text() {
        return this._text;
    }
}
