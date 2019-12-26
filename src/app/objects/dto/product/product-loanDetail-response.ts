import { CommonHeaderRequest } from '../common/common-header-request';

export class LoanDetail {
    header: CommonHeaderRequest;
    body: Body;
}
class Body {
    customerId: string;
    totLoan: {
        totAmt: number;
        totBal: number
    }
    facilityDetail: [
        {
            facilityNbr: string,
            facRecords: [
                {
                    breakdownCodeDesc: string,
                    facmCurrencyCode: string,
                    facmApprovalAmt: number,
                    facmLoanBal: number,
                    facmNtdLoanBal: number,
                    negotiatPriceCode: string,
                    collateralCodeDesc: string,
                    facStatusCodeDesc: string,
                    breakRecords: [
                        {
                            accNbr: string,
                            lbCurrencyCode: string,
                            lbCurrentIntRate: number,
                            lbFxCurrentBal: number,
                            lbNtdCurrentBal: number,
                            firstFundingDate: string,
                            acctDueDate: string,
                            limitStatusCodeDesc: string
                        }
                    ]
                }
            ]
        }
    ]
}

