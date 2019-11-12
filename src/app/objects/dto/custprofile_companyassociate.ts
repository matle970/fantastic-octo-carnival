import { CommonHeader } from './common-header';

export class CompanyAssociate {
    header: CommonHeader;
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