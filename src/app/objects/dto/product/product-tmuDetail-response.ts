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
            amountAmt: number,
            usageAmt: number,
            lastAvailAmt: number,
            amountUseRate: number
        }
    ]
    tmuInvesment: [
        {
            invesTypeCode: string,
            productDesc: string,
            prodCurrencyDesc: string,
            referenceNetvalue: number,  
            fxCurrentValue: number,
            startDate: string,   
            endDate: string      
        }
    ]
    tmuContribution: {
        derivative: number,  
        wms: number,    
        fxSport: number 
    }
}