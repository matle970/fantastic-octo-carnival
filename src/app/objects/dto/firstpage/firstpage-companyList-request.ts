import { CommonHeaderRequest } from "../common/common-header-request";

/************************************************
 * CB005 Request Object
 **************************************************/
export class CompanyListRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}
class Body {
    bossId: string;
    trustKey: string;
}
