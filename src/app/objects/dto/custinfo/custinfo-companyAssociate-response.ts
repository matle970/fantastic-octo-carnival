import { CommonHeaderResponse } from '../common/common-header-response';

export class CompanyAssociate {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    records: [
        {
            customerId: string;
            customerName: string;
            relationDesc: string;
            vipTypeCode: string;
            wmAoName: string;
            wmAoBranchDesc: string;
            isAmlGovInd: string;
            employeeInd: string;
            ccVip1Ind: string;
            cubManagerInd: string;
            lowMarketingInd: string;
            blackListInd: string;
            secretInd: string;
        }
    ];
}