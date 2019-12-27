import { CommonHeaderRequest } from "../common/common-header-request"

export class DepositDetail {
    header: CommonHeaderRequest;
    body: Body;
}

class Body {
    customerId: string;
    assets:
        {
            ntdAssets: {
                sd: number,
                td: number,
                cd: number,
                all: number
            },
            fxAssets: {
                sd: number,
                td: number,
                cd: number,
                all: number
            },
            sumAssets: {
                sd: number,
                td: number,
                cd: number,
                all: number
            },
            r6mthAvgBal: {
                sd: number,
                td: number,
                cd: number,
                all: number
            }
        }
    sdDetail: [
        {
            acctNbr: string,
            currencyCode: string,
            fxCurrentBal: number,
            ntdCurrentBal: number,
            currentIntRate: number,
            ftpRate: number,
            sdRemark: {
                accBranchCode: string,
                payrollCodeDtl: string,
                isTrust: string,
                isSecurities: string,
                isRevers: string
            }
        }
    ]
    tdDetail: [
        {
            acctNbr: string,
            currencyCode: string,
            fxCurrentBal: number,
            ntdCurrentBal: number,
            currentIntRate: number,
            ftpRate: number,
            acctOpenDate: string,
            tdDueDate: string
        }
    ]
    cdDetail: [
        {
            acctNbr: string,
            ntdCurrentBal: number,
            cdRemark: {
                dishY3ChkCnt: string,
                dishCancelY3ChkCnt: string,
                rejectedStatusInd: string,
                isReverse: string,
            }
        }
    ]
}



