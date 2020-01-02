import { CommonHeaderRequest } from "../common/common-header-request";

export class AllNotificationRequest {
    header: CommonHeaderRequest = new CommonHeaderRequest;
    body: Body = new Body;
}
class Body {
    customerId: string[];
    aoId: string;
    trustKey: string;
}
