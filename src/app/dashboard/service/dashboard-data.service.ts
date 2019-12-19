import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DashboardDataService {
    //getDashboardDataTable() {
    //  return tableDetailList;  
    //}
    constructor() { }
}
export interface IndexTableElement {
    id: string;
    ao: string;
    wmbranchId: string;
    referBranchId: string;
    group_name: string;
    cus_id: string;
    cus_name: string;
    msr: string;
    rorwa: string;
    raroc: string;
    last_year_contribution: string;
    this_year_contribution: string;
    deposit: string;
    load_balance: string;
    trade_balance: string;
    tag: any;
};