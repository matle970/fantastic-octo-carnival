import { CommonHeaderResponse } from '../common/common-header-response';

export class Company {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    customerId: string;
    approvalGrade: string;
    rorwa: string;
    raroc: string;
    totalRelAssetBal: string;
    totalRelCreditLimit: string;
    totalRelLiabilitiesBal: string;
    tcriLevel: string;
}