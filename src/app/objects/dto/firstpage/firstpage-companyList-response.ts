
import { CommonHeaderResponse } from '../common/common-header-response';

export class CompanyListResponse {
    header: CommonHeaderResponse;
    body: Body;

    constructor(init?: Partial<CompanyListResponse>) {
        Object.assign(this, init);
    }
}
class Body {
    bossId: string;
    records: RecordsData[];
}

class RecordsData {
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
}
