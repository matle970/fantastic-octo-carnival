import { CommonHeaderResponse } from '../common/common-header-response';

/************************************************
 * CB013的 Response Object
 **************************************************/
export class CompanyDetailResponse {
    constructor(init?: Partial<CompanyDetailResponse>) {
        Object.assign(this, init);
    }
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    customerId: string;
    customerName: string;
    stockCode: string;
    capitalAmt: number;
    realCapitalAmt: number;
    establishmentDate: string;
    chiefName: string;
    registerAddress: string;
    residenceAddress: string;
    address: string;
    personInCharge: {
        name: string;
        age: string;
        birth: string;
        aum: string;
        tags: Array<string>;
        contries: Array<string>;
    };
    mate: {
        name: string;
        age: string;
        birth: string;
        aum: string;
        tags: Array<string>;
        contries: Array<string>;
    };
    contactPersons: [
        {
            name: string;
            title: string;
            tel: string;
        },
        {
            name: string;
            title: string;
            tel: string;
        }
    ]
}