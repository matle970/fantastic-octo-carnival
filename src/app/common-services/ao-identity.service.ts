import { Injectable } from "@angular/core";

@Injectable()
export class AoIdentityService {

    private _aoId: string;
    private _aoName: string;
    constructor() {}
    
    //get variable example
    print() {
        console.log('aoId: ' + this._aoId);
    }

    get aoId() {
        return this._aoId;
    }
    set aoId(value) {
       this._aoId = value;
    }

    get aoName() {
        return this._aoName;
    }
    set aoName(value) {
       this._aoName = value;
    }
    
    clear() {
        this._aoId = '';
    }
}
