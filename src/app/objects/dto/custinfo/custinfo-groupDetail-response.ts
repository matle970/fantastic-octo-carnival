import { CommonHeaderResponse } from '../common/common-header-response';

export class GroupDetail {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    parentCompanyId: string;
    parentCustomerName: string;
    groupInfo: {
      sumLastYearAccumContri: string;
      sumThisYearAccumContri: string;
      sumTotalDepositBal: string;
      sumTotalLoanBal: string;
      sumTotalTradeFinanceBal: string;
    }
    groupMemberLoanInfo: [
      {
        customerId: string;
        customerName: string;
        breakdownCodeDesc: string;
        sumfacdFxLimitAmt: string;
        sumLbFxCurrentBal: string;
      }
    ]
}