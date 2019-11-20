import { Injectable } from "@angular/core";

@Injectable()
export class AoIdentityService {

    private _aoId: string;

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

    clear() {
        this._aoId = '';
    }
}
