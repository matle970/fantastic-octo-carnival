import { CommonHeaderRequest } from '../common/common-header-request';

export class LoanDetail {
    header: CommonHeaderRequest;
    body: Body;
}
class Body {
    customerId: string;
    toLoan: {
        toAmt: string;
        toBal: string
    }
    facilityDetail: [
        {
            facilityNbr: string,
            facRecords: [
                {
                    breakdownCodeDesc: string,
                    facmCurrencyCode: string,
                    facmApprovalAmt: string,
                    facmLoanBal: string,
                    facmNtdLoanBal: string,
                    negotiatPriceCode: string,
                    collateral: [
                        {
                            collateralCodeDesc: string;
                        }
                    ],
                    facStatusCodeDesc: string;
                    breakRecords: [
                        {
                            accNbr: string,
                            lbCurrencyCode: string,
                            lbCurrentIntRate: string,
                            lbFxCurrentBal: string,
                            lbNtdCurrentBal: string,
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

