import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AoIdentityService {
    private _aoId: string;
    private _token: string;
    constructor() {}
    
    //get variable example
    print() {
        console.log('oaId: ' + this._aoId + ', token: ' + this._token);
    }

    get aoId() {
        return this._aoId;
    }
    set aoId(value) {
       this._aoId = value;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value
    }
}
