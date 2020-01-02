import { CommonHeaderResponse } from './common-header-response';

/************************************************
 * 共通的 Request Object
 **************************************************/
export class CommonResponse {
    header: CommonHeaderResponse = new CommonHeaderResponse;
    body: any;
}
