import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DummyDataService {

    private _useDummyData: boolean;

    constructor() { }

    set useDummyData(value: boolean) {
        this._useDummyData = value;
    }

    get useDummyData() {
        return this._useDummyData;
    }
}
