import { CommonHeaderRequest } from "../common/common-header-request";

/************************************************
 * 共通的 Request Object
 **************************************************/
export class CompanyListRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}
class Body {
    bossId: string;
    trustKey: string;
}
