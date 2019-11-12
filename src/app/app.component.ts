import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from './common-area/animations/animations';
import { SidebarService } from './objects/services/sidebar.service';
import { BaseComponent } from './base/base-component';
import { Firstpage_ao_profile } from './objects/dto/firstpage-ao-profile-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ onMainContentChange ]
})
export class AppComponent extends BaseComponent implements OnInit {

  public onSideNavChange: boolean = true;
  urlList = [{
    'url': this.URL.FIRSTPAGE_AO_PROFILE,
    'classType': Firstpage_ao_profile
  }];

  constructor(private _sidebarService: SidebarService) {
    super();
    this._sidebarService.sideNavState$.subscribe( res => {
      // console.log(res);
      this.onSideNavChange = res;
    })
    this.sendRquest();
  }

  ngOnInit() {
  }
  sendRquest() {
    super.sendRequestAsync(this.urlList[0].url, this.urlList[0].classType).then((data: any) => {
      console.log('oa info', data);
      sessionStorage.setItem('token_id', data.body.token);
    }, (err) => {

    });
  }


}
