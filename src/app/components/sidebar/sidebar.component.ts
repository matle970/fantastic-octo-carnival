import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from './../../animations/animations';
import { SidebarService } from './../../services/sidebar.service';

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
    { path: './customer', title: '客戶視圖',  icon:'location_city', class: '' },
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

  public sideNavState: boolean = true;

  menuItems: any[];
  sideWide: boolean = true;

  constructor(private _sidebarService: SidebarService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  toggleSideWith() {
    this.sideWide = !this.sideWide;
  }

  onSidebarToggle() {
    this.sideWide = !this.sideWide;
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
