import { HeaderResponse } from 'src/app/objects/dto/header-response';

/************************************************
 * 共通的 Request Object
 **************************************************/
export class CommonResponse {
    header: HeaderResponse;
    body: any;
}