import { Injectable } from '@angular/core';

/*******************
 * 設定Trustkey的Service
 **********************/
@Injectable({ providedIn: 'root' })
export class TrustkeyServeice {

    private _Trustkey: string;

    constructor() { }

    print() {
        console.log('Trustkey: ' + this._Trustkey);
    }

    set Trustkey(value: string) {
        this._Trustkey = value;
    }

    get Trustkey() {
        return this._Trustkey;
    }

    clear() {
        this._Trustkey = '';
    }
}
