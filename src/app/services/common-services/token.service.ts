import { Injectable } from '@angular/core';

/*******************
 * 設定Token的Service
 **********************/
@Injectable({ providedIn: 'root' })
export class TokenService {

    private _Token: string;

    constructor() { }

    print() {
        console.log('Token: ' + this._Token);
    }

    set Token(value: string) {
        this._Token = value;
    }

    get Token() {
        return this._Token;
    }

    clear() {
        this._Token = '';
    }
}