
import { CommonHeaderResponse } from '../common/common-header-response';

export class NotificationResponse {
    header: CommonHeaderResponse;
    body: Body;

    constructor(init?: Partial<NotificationResponse>) { 
        Object.assign(this, init);
    }
}
class Body { }
