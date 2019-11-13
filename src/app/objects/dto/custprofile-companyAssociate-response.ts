import { CommonHeaderResponse } from './common-header-response';

export class CompanyAssociate {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    records: [
        {
            customerId: string,
            customerName: string,
            relationDesc: string,
            vipTypeCode: string,
            wmAoName: string,
            wmAoBranchDesc: string
        }
    ];
}