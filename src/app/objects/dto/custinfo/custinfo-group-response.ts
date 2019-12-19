import { CommonHeaderResponse } from '../common/common-header-response';

export class Group {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    parentCompanyId: string;
    parentCustomerName: string;
    rorwa: string;
    raroc: string;
}