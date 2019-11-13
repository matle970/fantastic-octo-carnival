import { CommonHeaderResponse } from './common-header-response';

/************************************************
 * 共通的 Request Object
 **************************************************/
export class CommonResponse {
    header: CommonHeaderResponse;
    body: any;
}
