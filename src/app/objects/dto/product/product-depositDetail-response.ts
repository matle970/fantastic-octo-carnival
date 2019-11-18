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
        sd: string,
        td: string,
        cd: string
      },
      fxAssets: {
        sd: string,
        td: string,
        cd: string
      },
      sumAssets: {
        sd: string,
        td: string,
        cd: string
      },
      r6mthAvgBal: {
        sd: string,
        td: string,
        cd: string
      }
    }
  sdDetail: [
    {
      acctNbr: string,
      currencyCode: string,
      fxCurrentBal: string,
      ntdCurrentBal: string,
      currentIntRate: string,
      ftpRate: string,
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
      fxCurrentBal: string,
      ntdCurrentBal: string,
      currentIntRate: string,
      ftpRate: string,
      acctOpenDate: string,
      tdDueDate: string
    }
  ]
  cdDetail: [
    {
      acctNbr: string,
      ntdCurrentBal: string,
      cdRemark: {
        dishY3ChkCnt: string,
        dishCancelY3ChkCnt: string,
        rejectedStatusInd: string,
        isReverse: string,
      }
    }
  ]
}



