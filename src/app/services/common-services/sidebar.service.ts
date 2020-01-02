

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseService } from '../common-services/base/base.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // With this subject you can save the sidenav state and consumed later into other pages.
  public sideNavState$: Subject<boolean> = new Subject();

  constructor(public baseService: BaseService) { }

  //load Routerconfig
  ROUTES: RouteInfo[] = this.baseService.gettextservice.sidebarconfig.sidebar;

}
