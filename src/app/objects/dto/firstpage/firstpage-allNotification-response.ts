import { CommonHeaderResponse } from '../common/common-header-response';

export class AllNotificationResponse {
    constructor(init?: Partial<AllNotificationResponse>) { 
        Object.assign(this, init);
    }

    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    records: RecordsData[];
}

class RecordsData {
    customerId: string;
    customerName: string;
    alertItem: string;
    alertClassify: string;
    eventDate: string;
    eventDesc: string;
    snapshotDate: string;
    seqNo: string;
    readFlag: string;
}

