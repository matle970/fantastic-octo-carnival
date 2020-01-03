import { CommonHeaderRequest } from "../common/common-header-request";


export class AssetsLibilities {
    header: CommonHeaderRequest;
    body: Body;
}

class Body {
    customerid: string;
    deposit: string
    depositMon: Array<string>
    depositBal: Array<number>
    loan: string
    loanMon: Array<string>
    loanBal: Array<number>
    tradeFinance: string
    tradeFinanceMon: Array<string>
    tradeFinanceBal: Array<number>
    import: string
    importMon: Array<string>
    importAmt: Array<number>
    export: string
    exportMon: Array<string>
    exportAmt: Array<number>
    tmu: string
    tmuMon: Array<string>
    tmuUsage: Array<number>
    mtm: string
    mtmMon: Array<string>
    mtmUsage: Array<number>
    currentValue: {
        currentDeposit: number,
        currentLoan: number,
        currentTradeFinance: number,
        currentImport: number,
        currentExport: number,
        currentTmu: number,
        currentMtm: number
    }
}