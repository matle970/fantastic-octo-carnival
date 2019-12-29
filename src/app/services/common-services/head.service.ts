import { Injectable } from '@angular/core';

/*******************
 * 設定Header的Service
 **********************/
@Injectable({ providedIn: 'root' })
export class HeadServeice {

    private _apId: string;
    private _branchId: string;
    private _employeeId: string;
    private _clientIp: string;
    private _role: string;
    private _roleCode: string;
    private _txnDateTime: string;


    constructor() { }

    print() {
        console.log('apId: ' + this._apId);
        console.log('branchId: ' + this._branchId);
        console.log('employeeId: ' + this._employeeId);
        console.log('clientIp: ' + this._clientIp);
        console.log('role: ' + this._role);
        console.log('roleCode: ' + this._roleCode);
        console.log('txnDateTime: ' + this._txnDateTime);
    }

    set apId(value: string) {
        this._apId = value;
    }
    get apId() {
        return this._apId;
    }

    set branchId(value: string) {
        this._branchId = value;
    }
    get branchId() {
        return this._branchId;
    }

    set employeeId(value: string) {
        this._employeeId = value;
    }
    get employeeId() {
        return this._employeeId;
    }

    set clientIp(value: string) {
        this._clientIp = value;
    }
    get clientIp() {
        return this._clientIp;
    }

    set role(value: string) {
        this._role = value;
    }
    get role() {
        return this._role;
    }

    set roleCode(value: string) {
        this._roleCode = value;
    }
    get roleCode() {
        return this._roleCode;
    }

    set txnDateTime(value: string) {
        this._txnDateTime = value;
    }
    get txnDateTime() {
        return this._txnDateTime;
    }

    clear() {
        this._apId = '';
        this._branchId = '';
        this._employeeId = '';
        this._clientIp = '';
        this._txnDateTime = '';
    }
}
