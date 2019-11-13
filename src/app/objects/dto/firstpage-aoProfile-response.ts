import { CommonHeaderResponse } from './common-header-response';

export class Firstpage_ao_profile {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    aoId: string;
    token: string;
}