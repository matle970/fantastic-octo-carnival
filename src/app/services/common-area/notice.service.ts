import { Injectable } from '@angular/core';
import { BaseService } from '../common-services/base/base.service';
import { NotificationRequest } from 'src/app/objects/dto/notification/notification-request';
import { NotificationResponse } from 'src/app/objects/dto/notification/notification-response';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NoticeService {

	public indexNotice$: Subject<number> = new Subject();
	public companyNotice$: Subject<number> = new Subject();
	urlList = [{
		'url': this.baseService.geturlservice.URL.FIRSTPAGE_COMPANY_LIST,
		'dtoRequset': NotificationRequest,
		'dtoResponse': NotificationResponse
	}];
	constructor(private baseService: BaseService) { }
	async sendRquest(): Promise<NotificationResponse> {
		let result = await this.baseService.httpservice.sendRequestAsync(
			this.urlList[0].url,
			this.urlList[0].dtoRequset,
			this.urlList[0].dtoResponse);
		return result;
	};
}
