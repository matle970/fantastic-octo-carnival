import { CommonHeaderRequest } from "./common-header-request";

/************************************************
 * 共通的 Request Object
 **************************************************/
export class CommonRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}
class Body {
    bossId: string;
    trustKey: string;
}
