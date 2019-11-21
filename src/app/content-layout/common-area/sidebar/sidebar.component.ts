import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from '../animations/animations';
import { SidebarService } from 'src/app/services/common-services/sidebar.service';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

// sidebar nav item - demosite
export const ROUTES: RouteInfo[] = [
    { path: './dashboard', title: '首頁總覽',  icon: 'home', class: '' },
    { path: './customer', title: '客戶視圖',  icon:'view_quilt', class: '' },
];

//localsite
// export const ROUTES: RouteInfo[] = [
//   { path: 'dashboard', title: '首頁總覽',  icon: 'home', class: '' },
//   { path: 'customer', title: '客戶視圖',  icon:'location_city', class: '' },
// ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class SidebarComponent implements OnInit {

  // 預設為窄版的
  public sideNavState: boolean = false;
  
  public onSideNavChange: boolean = true;

  menuItems: any[];

  // 預設為窄版的
  sideWide: boolean = false;

  constructor(private _sidebarService: SidebarService) {
    this._sidebarService.sideNavState$.subscribe( res => {
      // console.log(res);
      this.onSideNavChange = res;
    })
   }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this._sidebarService.sideNavState$.next(false);
  }
  toggleSideWith() {
    this.sideWide = !this.sideWide;
  }

  onSidebarToggle() {
    // this.sideWide = !this.sideWide;
    this.sideNavState = !this.sideNavState;
    this._sidebarService.sideNavState$.next(this.sideNavState);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
