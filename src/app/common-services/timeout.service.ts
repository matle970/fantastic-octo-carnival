import { Injectable } from '@angular/core';

/*******************
 * 設定Timeout的Service
 **********************/
@Injectable({ providedIn: 'root' })
export class TimeoutService {

    private _isTimeout: boolean;

    constructor() { }

    print() {
        console.log('isTimeout: ' + this._isTimeout);
    }

    set isTimeout(value: boolean) {
        this._isTimeout = value;
    }

    get isTimeout() {
        return this._isTimeout;
    }
}
