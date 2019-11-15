import { CommonHeaderResponse } from '../common/common-header-response';

export class AoProfile {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    aoId: string;
    token: string;
}