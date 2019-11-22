import { CommonHeaderResponse } from "../common/common-header-response";

export class ReferBranchResponse {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    branch: Branch[];
}
class Branch {
    branchId: string;
    branchName: string;
}
