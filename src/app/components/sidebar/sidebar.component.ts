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

// sidebar nav item
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: '首頁總覽',  icon: 'home', class: '' },
    { path: '/customer', title: '客戶視圖',  icon:'location_city', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'arrow',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class SidebarComponent implements OnInit {

  public sideNavState: boolean = false;

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
