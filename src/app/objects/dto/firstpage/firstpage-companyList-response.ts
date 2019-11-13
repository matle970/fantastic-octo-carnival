import { CommonHeaderRequest } from '../common/common-header-request';

export class Firstpage_company_list {
    header: CommonHeaderRequest;
    body: Body;
}
class Body {
    aoData: [
        {
            id: string,
            ao: string,
            cus_id: string,
            cus_name: string,
            msr: string,
            rorwa: string,
            raroc: string,
            last_year_contribution: string,
            this_year_contribution: string,
            deposit: string,
            load_balance: string,
            trade_balance: string,
            tag: any[]
        }
    ]
}
