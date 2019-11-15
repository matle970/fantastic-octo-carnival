import { CommonHeaderRequest } from "../common/common-header-request";


<<<<<<< HEAD:src/app/objects/dto/product/product-assetsLibilities-response.ts
export class AssetsLibilities {
=======
export class AssetsLibilites {
>>>>>>> d2d303182659761122acca973a62cd18e52751e9:src/app/objects/dto/product/product-assetsLibilites-response.ts
    header: CommonHeaderRequest;
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