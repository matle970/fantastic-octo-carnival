import { HeaderResponse } from 'src/app/dto/header-response';

/************************************************
 * 共通的 Request Object
 **************************************************/
export class CommonResponse {
    header: HeaderResponse;
    body: any;
}
