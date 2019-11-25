
import { CommonHeaderResponse } from '../common/common-header-response';

export class CompanyListResponse {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    aoData: AoData[];
}

class AoData {
    id: string;
    ao: string;
    cus_id: string;
    cus_name: string;
    msr: string;
    rorwa: string;
    raroc: string;
    last_year_contribution: string;
    this_year_contribution: string;
    deposit: string;
    load_balance: string;
    trade_balance: string;
    tag: any[];
}
