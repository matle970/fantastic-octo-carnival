import { Injectable } from "@angular/core";

@Injectable()
export class CustomerInfoService {
    private _customerId: string;
    private _token: string;
    constructor() {}
    
    //get variable example
    print() { 
        console.log('customerId: ' + this._customerId);
    }

    get customerId() {
        return this._customerId;
    }
    set customerId(value) {
       this._customerId = value;
    }
}
