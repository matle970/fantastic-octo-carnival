import { CommonHeaderRequest } from "../common/common-header-request"

export class DepositDetail {
    header: CommonHeaderRequest;
    body: Body;
}

class Body {
        customerId: string;
        assets:
        {
          ntdAssets:{
            sd: string,
            td: string,
            cd: string
          },
          fxAssets:{
            sd: string,
            td: string,
            cd: string
          },
          sumAssets:{
            sd: string,
            td: string,
            cd: string
          },
          r6mthAvgBa:{
            sd: string,
            td: string,
            cd: string
          }
        }
        sdDetail:[
          {
            acctNbr: string,
            // currencyCode:
            // fxCurrentBal:
            // ntdCurrentBal:
            // currentIntRate:
            // ftpRate:
            sdRemark:{
              accBranchCode: string,
              payrollCodeDtl: string,
              isTrust: string,
              isSecurities: string,
              isRevers: string
            }
          }
        ]
        tdDetail:[
          {
            acctNbr: string,
            // currencyCode:
            // fxCurrentBal:
            // ntdCurrentBal:
            // currentIntRate:
            // ftpRate:
            // acctOpenDate:
            // tdDueDate:
          }
        ]
        cdDetail:[
          {
            acctNbr: string,
            ntdCurrentBal: string,
            cdRemark:{
              dishY3ChkCnt: string,
              dishCancelY3ChkCnt: string,
              rejectedStatusInd: string,
              isReverse: string,
            }
          }
        ]
      }
    

    