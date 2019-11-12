import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from './common-area/animations/animations';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ onMainContentChange ]
})
export class AppComponent implements OnInit {

  public onSideNavChange: boolean = true;

  constructor(private _sidebarService: SidebarService) {
    this._sidebarService.sideNavState$.subscribe( res => {
      // console.log(res);
      this.onSideNavChange = res;
    })
  }

  ngOnInit() {
    // const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    // if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
    //     // if we are on windows OS we activate the perfectScrollbar function

    //     document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
    // } else {
    //     document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
    // }

  }


}
