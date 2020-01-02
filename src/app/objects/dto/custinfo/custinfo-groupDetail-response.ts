import { CommonHeaderResponse } from '../common/common-header-response';

/************************************************
 * CB017的 Response Object
 **************************************************/
export class GroupDetailResponse {
    constructor(init?: Partial<GroupDetailResponse>) {
        Object.assign(this, init);
    }
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    parentCompanyId: string;
    parentCustomerName: string;
    groupInfo: {
        sumLastYearAccumContri: number;
        sumThisYearAccumContri: number;
        sumTotalDepositBal: number;
        sumTotalLoanBal: number;
        sumTotalTradeFinanceBal: number;
    }
    groupMemberLoanInfo: [
        {
            customerId: string;
            customerName: string;
            breakdownCodeDesc: string;
            sumfacdFxLimitAmt: number;
            sumLbFxCurrentBal: number;
        }
    ]
}