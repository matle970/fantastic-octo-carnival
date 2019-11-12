import { CommonHeader } from './common-header';

export class CompanyAssociateAssets {
    header: CommonHeader;
    body: Body;
}
class Body {
    customerid: string;
    assets: {
        sdDetail: [
            {
                accNbr: string;
                ntdY1AvgBal: string;
                ntdCurrentBal: string;
                isSecurities: string;
            }
        ];
        tdDetail: [
            {
                accNbr: string;
                ntdY1AvgBal: string;
                ntdCurrentBal: string;
            }
        ];
        cdDetail: [
            {
                accNbr: string;
                ntdY1AvgBal: string;
                ntdCurrentBal: string;
                dishY3ChkCnt: string;
                dishCancelY3ChkCnt: string;
                lastRejectDate: string;
                rejectedStatusInd: string;
            }
        ]
    };
    libilities: [
        {
            productId: string;
            productCodeDesc: string;
            acctNbr: string;
            currencyCodeDesc: string;
            ntdApprovalAmt: string;
            ntdCurrentBal: string;
            delqDays: string;
            collateralCode: string;
            buildPurposeCode: string;
        }
    ];
    ccCard: [
        {
            cardName: string;
            kindName: string;
            primaryCardInd: string;
            cardholderCustName: string;
        }
    ];
    investment: {
        lifeInsurance: string;
        productInsurance: string;
        fund: string;
        foreignsecurities: string;
        structuredInvestment: string;
    };
}