/************************************************
 * 共通的 Response Header
 **************************************************/
export class CommonHeaderResponse {
    constructor(init?: Partial<CommonHeaderResponse>) { 
        Object.assign(this, init);
    }
    
    apId: string;

    branchId: string;

    employeeId: string;

    clientIp: string;

    role: string;

    roleCode: string;

    txnDateTime: string;

    returnCode: string;
    
    returnDesc: string;
}
