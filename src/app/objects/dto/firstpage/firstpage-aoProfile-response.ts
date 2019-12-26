import { CommonHeaderResponse } from '../common/common-header-response';

export class AoProfileResponse {
    constructor(init?: Partial<AoProfileResponse>) { 
        Object.assign(this, init);
    }

    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    loginId: string;
    employeeName: string;
    trustKey: string;
}
