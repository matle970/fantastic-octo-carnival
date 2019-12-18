import { CommonHeaderRequest } from "../common/common-header-request";


export class AssetsLibilities {
    header: CommonHeaderRequest;
    body: Body;
}

class Body {
    customerid: string;
    deposit:
        {
            depositMon: Array<string>,
            depositBal: Array<string>

        }
    loan:
        {
            loanMon: Array<string>,
            loanBal: Array<string>
        }
    tradeFinance:
        {
            tradeFinanceMon: Array<string>,
            tradeFinanceBal: Array<string>
        }
    import:
        {
            importMon: Array<string>,
            importAmt: Array<string>
        }
    export:
        {
            exportMon: Array<string>,
            exportAmt: Array<string>
        }
    tmu:
        {
            tmuMon: Array<string>,
            tmuUsage: Array<string>
        }
    mtm:
        {
            mtmMon: Array<string>,
            mtmUsage: Array<string>
        }




}