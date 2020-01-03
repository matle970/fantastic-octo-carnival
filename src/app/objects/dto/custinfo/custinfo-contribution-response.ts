import { CommonHeaderRequest } from "../common/common-header-request";

/************************************************
 * CB020的 Response Object
 **************************************************/
export class ContributionResponse {
    constructor(init?: Partial<ContributionResponse>) {
        Object.assign(this, init);
    }
    header: CommonHeaderRequest;
    body: Body;
}
class Body {
    customerid: string;
    contributionType: Array<string>;
    lastcontri: {
        startYM: string;
        endYM: string;
        contribution: Array<string>;
    };
    thiscontri: {
        startYM: string;
        endYM: string;
        contribution: Array<string>;
    }
}