import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { AoProfile } from '../objects/dto/firstpage/firstpage-aoProfile-response';
import { SidebarService } from '../common-services/sidebar.service';
import { AoIdentityService } from '../objects/share-data/ao-identity-service';
import { ActivatedRoute, Router } from '@angular/router';
import { onMainContentChange } from './common-area/animations/animations';

@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrls: ['./content-layout.component.scss'],
    animations: [onMainContentChange]
})

export class ContentLayoutComponent extends BaseComponent implements OnInit {

    token: string;
    public onSideNavChange: boolean = true;
    urlList = [{
        'url': this.URL.FIRSTPAGE_AO_PROFILE,
        'dtoResponse': AoProfile
    }];

    constructor(
        private _sidebarService: SidebarService,
        private _aoIdentity: AoIdentityService,
        private router: Router,
        private route: ActivatedRoute) {

        super();
    }

    ngOnInit() {
        this._sidebarService.sideNavState$.subscribe(res => {
            // console.log(res);
            this.onSideNavChange = res;
        })

        /**Jewel
         * get request param from url
         * and keep it in session
         */
        this.route.queryParams.subscribe((value) => {
            this.token = value['token'];
            console.log('url token: ' + this.token);
            sessionStorage.setItem('token', this.token);
        });

        this.sendRquest(this._aoIdentity);
    }

    sendRquest(keepedData) {
        //TODO: assign token to request 
        super.sendRequestAsync(this.urlList[0].url, this.urlList[0].dtoResponse).then((data: any) => {
            sessionStorage.setItem('trustKey', data.body.token);
            keepedData.token = data.body.token;
            keepedData.aoId = data.body.aoId;
        }, (err) => {

        });
    }
}
