import { HeaderRequest } from 'src/app/dto/header-request';

/************************************************
 * 共通的 Request Object
 **************************************************/
export class CommonRequest {
    header: HeaderRequest;
    body: any;
}
