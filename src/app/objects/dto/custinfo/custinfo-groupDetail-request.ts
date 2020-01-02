import { CommonHeaderRequest } from "../common/common-header-request";

/************************************************
 * CB017的 Request Object
 **************************************************/
export class GroupDetailRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}
class Body {
    parentCompanyId: string;
    trustKey: string;
}
