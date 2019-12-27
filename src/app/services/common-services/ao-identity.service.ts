import { Injectable } from "@angular/core";

@Injectable()
export class AoIdentityService {

    private _loginId: string;
    private _employeeName: string;

    constructor() {}
    
    //get variable example
    print() {
        console.log('loginId: ' + this._loginId + ' employeeName: ' + this._employeeName);
    }

    get loginId() {
        return this._loginId;
    }
    set loginId(value) {
       this._loginId = value;
    }

    get employeeName() {
        return this._employeeName;
    }
    set employeeName(value) {
       this._employeeName = value;
    }
    
    clear() {
        this._loginId = '';
        this._employeeName = '';
    }
}
