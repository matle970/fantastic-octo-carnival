import { CommonHeaderRequest } from "../common/common-header-request";

export class Contribution {
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