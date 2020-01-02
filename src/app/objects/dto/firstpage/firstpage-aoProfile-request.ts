import { CommonHeaderRequest } from "../common/common-header-request";

/************************************************
 * CB001的 Request Object
 **************************************************/
export class AoProfileRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}
class Body {
    customerId: string;
    token: string;
}
