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
            bal: string,        //金額名目本金(暫定)
            ntdCurrentValue: string,
            startDay: string,   //起日(暫定)
            endDay: string      //迄日(暫定)
        }
    ]
    tmuContribution: {
        trade: string,  //金融交易額(暫定)
        prd: string,    //投資型商品(暫定)
        fxSport: string //FS SPOT(暫定)
    }
}