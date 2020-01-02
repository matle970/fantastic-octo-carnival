import { Injectable } from "@angular/core";

@Injectable()
export class CustomerIdService {
    private _customerId: string;
    private _parentCompanyId: string;
    constructor() { }

    //get variable example
    printcustId() {
        console.log('customerId: ' + this._customerId);
    }

    printparentcustId() {
        console.log('parentCompanyId: ' + this._parentCompanyId);
    }

    get customerId() {
        return this._customerId;
    }
    set customerId(value) {
        this._customerId = value;
    }

    get parentCompanyId() {
        return this._parentCompanyId;
    }
    set parentCompanyId(value) {
        this._parentCompanyId = value;
    }
}
