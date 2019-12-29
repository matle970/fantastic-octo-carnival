/************************************************
 * 共通的 Request Header
 **************************************************/
export class CommonHeaderRequest {
    constructor(init?: Partial<CommonHeaderRequest>) { 
        Object.assign(this, init);
    }
    apId: string;

    branchId: string;

    employeeId: string;

    clientIp: string;

    role: string;

    roleCode: string;

    txnDateTime: string;
}
