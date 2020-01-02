import { Injectable } from "@angular/core";

@Injectable()
export class CustomerIdService {
    private _customerId: string;
    private _parentcustomerId: string;
    constructor() { }

    //get variable example
    printcustId() {
        console.log('customerId: ' + this._customerId);
    }

    printparentcustId() {
        console.log('parentcustomerId: ' + this._parentcustomerId);
    }

    get customerId() {
        return this._customerId;
    }
    set customerId(value) {
        this._customerId = value;
    }

    get parentcustomerId() {
        return this._parentcustomerId;
    }
    set parentcustomerId(value) {
        this._parentcustomerId = value;
    }
}
