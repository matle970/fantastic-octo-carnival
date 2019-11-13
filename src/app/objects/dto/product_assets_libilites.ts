import { CommonHeader } from "./common-header";


export class Assetslibilites {
    header: CommonHeader;
    body: Body;
}

class Body {
    customerid: string;
    deposit:
        {
            depositMon: string[],
            depositbal: string[]

        }
    loan:
        {
            loanMon: string[],
            loanbal: string[]
        }
    tradeFinance:
        {
            tradeFinanceMon: string[],
            tradeFinanceBal: string[]
        }
    import:
        {
            importMon: string[],
            importAmt: string[]
        }
    export:
        {
            exportMon: string[],
            exportAmt: string[]
        }
    tmu:
        {
            tmuMon: string[],
            tmuUsage: string[]
        }
    mtm:
        {
            mtmMon: string[],
            mtmUsage: string[]
        }




}