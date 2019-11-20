import { CommonHeaderResponse } from '../common/common-header-response';

export class ImportExportDetail {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
   customerId: string;
            import: [
                {
                    txnTypeDesc: string,
                    mon: string[],
                    usdTxnAmt: string[]
                }
            ]
            export: [
                {
                    txnTypeDesc: string,
                    mon: string[],
                    usdTxnAmt: string[]
                }
            ]
}