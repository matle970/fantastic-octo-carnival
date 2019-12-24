import { CommonHeaderRequest } from '../common/common-header-request';

export class ImportExportDetail {
    header: CommonHeaderRequest;
    body: Body;
}
class Body {
   customerId: string;
            import: [
                {
                    txnTypeDesc: string,
                    mon: string[],
                    usdTxnAmt: number[],
                    column:number[],
                    row: number[],
                    all: number[]
                }
            ]
            export: [
                {
                    txnTypeDesc: string,
                    mon: string[],
                    usdTxnAmt: number[],
                    column:number,
                    row: number[],
                    all: number
                }
            ]
}