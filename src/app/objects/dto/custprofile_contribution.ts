import { CommonHeader } from './common-header';

export class Contribution {
    header: CommonHeader;
    body: Body;
}
class Body {
    customerid: string;
    lastcontri: [
        {
            startym: string,
            endym: string,
            profittype1: string,
            profittype2: string,
            profittype3: string,
            profittype4: string,
            profittype5: string,
            profittype6: string
        }
    ];
    thiscontri: [
        {
            startym: string,
            endym: string,
            profittype1: string,
            profittype2: string,
            profittype3: string,
            profittype4: string,
            profittype5: string,
            profittype6: string
        }
    ];
}