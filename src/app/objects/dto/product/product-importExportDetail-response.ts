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
                    mon: Array<string>,
                    usdTxnAmt: Array<number>,
                    column:Array<number>,
                    row: Array<number>,
                    all: number
                }
            ]
            export: [
                {
                    txnTypeDesc: string,
                    mon: Array<string>,
                    usdTxnAmt: Array<number>,
                    column:Array<number>,
                    row: Array<number>,
                    all: number
                }
            ]
}