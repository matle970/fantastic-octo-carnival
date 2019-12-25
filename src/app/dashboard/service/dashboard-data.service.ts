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
    customerId: string;
    customerName: string;
    parentCompanyId: string;
    parentCompanyName: string;
    aoEmpCode: string;
    aoEmpName: string;
    approvalGrade: string;
    rorwa: number;
    raroc: number;
    lastYearAccumContri: number;
    thisYearAccumContri: number;
    totalDepositBal: number;
    totalLoanBal: number;
    totalTradeFinanceBal: number;
    manageBranchCode: string;
    manageBranchName: string;
    loanTransferBranchCode: string;
    loanTransferBranchName: string;
    coreCompany: string;
    creditInd: string;
    payrollComInd: string;
    geblnd: string;
    blackListInd: string;
};