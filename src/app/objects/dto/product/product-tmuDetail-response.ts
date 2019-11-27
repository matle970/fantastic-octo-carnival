import { CommonHeaderRequest } from "../common/common-header-request";


export class TMUDetail {
    header: CommonHeaderRequest;
    body: Body;
}
class Body {
    customerId: string;
            tmuTransAmt: [
                {
                    customerId: string,
                    amountType: string,
                    amountExpDate: string,
                    amountAmt: string,
                    usageAmt: string,
                    lastAvailAmt: string,
                    amountUseRate: string
                }
            ]
            tmuInvesment: [
                {
                    invesTypeCode: string,
                    productDesc: string,
                    prodCurrencyDesc: string,
                    ntdCurrentValue: string
                }
            ]
            tmuContribution:{
                
            }
}