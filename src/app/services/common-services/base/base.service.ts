import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { TokenService } from '../token.service';
import { TrustkeyServeice } from '../trustkey.service';
import { GeturlService } from '../geturl.service';
import { GettextService } from '../gettext.service';
import { DialogService } from '../dialog.service';
import { CustomerIdService } from '../customerid.service';

@Injectable({ providedIn: 'root' })
export class BaseService {

    constructor(
        public httpservice: HttpService,
        public tokenservice: TokenService,
        public trustkeyserveice: TrustkeyServeice,
        public geturlservice: GeturlService,
        public gettextservice: GettextService,
        public dialogservice: DialogService,
        public customerIdservice: CustomerIdService
    ) { }

}
