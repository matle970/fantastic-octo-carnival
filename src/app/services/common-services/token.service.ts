import { Injectable } from '@angular/core';

/*******************
 * 設定Token的Service
 **********************/
@Injectable({ providedIn: 'root' })
export class TokenService {

    private _userId: string;
    private _token: string;

    constructor() { }

    setdata(href: string) {
        console.log(href);
        let parsearray: string[];

        parsearray = href.split("?");
        if (parsearray.length === 1) {
            this._userId = 'testuserId';
            this._token = 'testtoken';
        } else {
            parsearray = parsearray[1].split("&");
            this._userId = parsearray[0].substring(7, parsearray[0].length);
            this._token = parsearray[1].substring(6, parsearray[1].length);
        }
    }

    print() {
        console.log('userId: ' + this._userId + ' token: ' + this._token);
    }

    set Token(value: string) {
        this._token = value;
    }

    get Token() {
        return this._token;
    }

    set UserID(value: string) {
        this._userId = value;
    }

    get UserID() {
        return this._userId;
    }

    clear() {
        this._userId = '';
        this._token = '';
    }
}
