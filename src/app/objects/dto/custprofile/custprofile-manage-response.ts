import { CommonHeaderResponse } from '../common/common-header-response';

export class Manage {
    header: CommonHeaderResponse;
    body: Body;
}
class Body {
    psId: string;
    psName: string;
    psBranchCode: string;
    psBranchDesc: string;
    tmoId: string;
    tmoName: string;
    tmoBranchCode: string;
    tmoBranchDesc: string;
    wmAoId: string;
    wmAoName: string;
    wmAoBranchCode: string;
    wmAoBranchDesc: string;
    principalWmAoId: string;
    principalWmAoName: string;
    principalWmAoBranchCode: string;
    principalWmAoBranchDesc: string;
}