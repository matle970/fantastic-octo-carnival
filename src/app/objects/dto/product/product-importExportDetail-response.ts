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
                    usdTxnAmt: string[],
                    column:string,
                    row: string[],
                    all: string
                }
            ]
            export: [
                {
                    txnTypeDesc: string,
                    mon: string[],
                    usdTxnAmt: string[],
                    column:string,
                    row: string[],
                    all: string
                }
            ]
}