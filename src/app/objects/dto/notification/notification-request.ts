import { CommonHeaderRequest } from "../common/common-header-request";

/************************************************
 * 共通的 Request Object
 **************************************************/
export class NotificationRequest {
    header: CommonHeaderRequest;
    body: Body;
}
class Body { }
