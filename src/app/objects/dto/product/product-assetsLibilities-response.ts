import { CommonHeaderRequest } from "../common/common-header-request";


export class AssetsLibilities {
    header: CommonHeaderRequest;
    body: Body;
}

class Body {
    customerid: string;
    deposit: string
    depositMon: Array<string>
    depositBal: Array<string>
    loan: string
    loanMon: Array<string>
    loanBal: Array<string>
    tradeFinance: string
    tradeFinanceMon: Array<string>
    tradeFinanceBal: Array<string>
    import: string
    importMon: Array<string>
    importAmt: Array<string>
    export: string
    exportMon: Array<string>
    exportAmt: Array<string>
    tmu: string
    tmuMon: Array<string>
    tmuUsage: Array<string>
    mtm: string
    mtmMon: Array<string>
    mtmUsage: Array<string>
    currentValue: {
        currentDeposit: string,
        currentLoan: string,
        currentTradeFinance: string,
        currentImport: string,
        currentExport: string,
        currentTmu: string,
        currentMtm: string
    }
}