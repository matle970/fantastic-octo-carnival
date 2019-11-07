import { HeaderRequest } from 'src/app/objects/dto/header-request';

/************************************************
 * 共通的 Request Object
 **************************************************/
export class CommonRequest {
    header: HeaderRequest;
    body: any;
}
