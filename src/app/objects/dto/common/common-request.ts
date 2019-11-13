import { CommonHeaderRequest } from "./common-header-request";

/************************************************
 * 共通的 Request Object
 **************************************************/
export class CommonRequest {
    header: CommonHeaderRequest;
    body: any;
}
class Body {
    customerId: string;
    trustKey: string;
}
