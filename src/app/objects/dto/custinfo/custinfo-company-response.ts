import { CommonHeaderResponse } from '../common/common-header-response';

export class CompanyResponse {
    constructor(init?: Partial<CompanyResponse>) {
        Object.assign(this, init);
    }

    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    customerId: string;
    approvalGrade: string;
    rorwa: number;
    raroc: number;
    totalRelAssetBal: number;
    totalRelCreditLimit: number;
    totalRelLiabilitiesBal: number;
    tcriLevel: string;
    customerName: string;
    industryCode: string;
    compFlag: Array<string>;
    nextReviewDate: string;
}