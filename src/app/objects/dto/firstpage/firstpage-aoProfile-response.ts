import { CommonHeaderResponse } from '../common/common-header-response';

export class AoProfileResponse {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    aoId: string;
    token: string;
}