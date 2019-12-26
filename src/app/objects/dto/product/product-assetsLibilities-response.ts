import { CommonHeaderRequest } from "../common/common-header-request";


export class AssetsLibilities {
    header: CommonHeaderRequest;
    body: Body;
}

class Body {
    customerid: string;
    deposit: string
    depositMon: Array<number>
    depositBal: Array<number>
    loan: string
    loanMon: Array<number>
    loanBal: Array<number>
    tradeFinance: string
    tradeFinanceMon: Array<number>
    tradeFinanceBal: Array<number>
    import: string
    importMon: Array<number>
    importAmt: Array<number>
    export: string
    exportMon: Array<number>
    exportAmt: Array<number>
    tmu: string
    tmuMon: Array<number>
    tmuUsage: Array<number>
    mtm: string
    mtmMon: Array<number>
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