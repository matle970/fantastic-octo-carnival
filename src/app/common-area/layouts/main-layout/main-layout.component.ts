import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../objects/services/sidebar.service';
import { onMainContentChange } from '../../animations/animations';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from "jquery";
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [ onMainContentChange ]
})
export class MainLayoutComponent implements OnInit {

  public onSideNavChange: boolean = true;

  constructor(private _sidebarService: SidebarService) {
    this._sidebarService.sideNavState$.subscribe( res => {
      // console.log(res);
      this.onSideNavChange = res;
    })
  }

  ngOnInit() {
    const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
        // if we are on windows OS we activate the perfectScrollbar function

        document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
    } else {
        document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
    }

  }

}
