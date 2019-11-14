import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from './common-area/animations/animations';
import { SidebarService } from './services/sidebar.service';
import { BaseComponent } from './base/base-component';
import { AoIdentityService } from './objects/share-data/ao-identity-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Firstpage_ao_profile } from './objects/dto/firstpage/firstpage-aoProfile-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ onMainContentChange ]
})
export class AppComponent extends BaseComponent implements OnInit {

  token: string;
  public onSideNavChange: boolean = true;
  urlList = [{
    'url': this.URL.FIRSTPAGE_AO_PROFILE,
    'classType': Firstpage_ao_profile
  }];

  constructor(private _sidebarService: SidebarService, private _aoIdentity: AoIdentityService,private router:Router,  route: ActivatedRoute) {
    super();

    this._sidebarService.sideNavState$.subscribe( res => {
      // console.log(res);
      this.onSideNavChange = res;
    })

    /**Jewel
     * get request param from url
     * and keep it in session
     */
    route.queryParams.subscribe((value)=>{
      this.token=value['token'];
      console.log('url token: ' + this.token);
      sessionStorage.setItem('token', this.token);
    });

    this.sendRquest(_aoIdentity);
  }

  ngOnInit() {

  }
  sendRquest(keepedData) {
    //TODO: assign token to request 
    super.sendRequestAsync(this.urlList[0].url, this.urlList[0].classType).then((data: any) => {
      sessionStorage.setItem('trustKey', data.body.token);
      keepedData.token = data.body.token;
      keepedData.aoId = data.body.aoId;
    }, (err) => {

    });
  }


}
