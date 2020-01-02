import { CommonHeaderResponse } from '../common/common-header-response';

/************************************************
 * CB016的 Response Object
 **************************************************/
export class GroupResponse {
    constructor(init?: Partial<GroupResponse>) {
        Object.assign(this, init);
    }
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    parentCompanyId: string;
    parentCustomerName: string;
    rorwa: number;
    raroc: number;
}