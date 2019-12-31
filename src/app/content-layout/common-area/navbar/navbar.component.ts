import { Component, OnInit, ElementRef } from '@angular/core';
// import { ROUTES } from '../sidebar/sidebar.component';
import { ROUTES } from '../../../../assets/export/siderbar';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { onSideNavChange, animateText } from '../animations/animations';
import { SidebarService } from 'src/app/services/common-services/sidebar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [onSideNavChange, animateText]
})
export class NavbarComponent implements OnInit {

    // 預設為窄版的
    public sideNavState: boolean = false;

    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;

    navTitle = '首頁總覽';

    constructor(location: Location,
        private element: ElementRef, private router: Router,
        private _sidebarService: SidebarService) {
        this.location = location;
        this.sidebarVisible = false;

        this.listTitles = ROUTES.filter(listTitle => listTitle);
        router.events.subscribe((val) => { this.getTitle(); });

    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
    }
    onSidebarToggle() {
        this.sideNavState = !this.sideNavState;
        this._sidebarService.sideNavState$.next(this.sideNavState);
    }


    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    }
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }


    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        var titleeArray = titlee.split('/');
        titlee = titleeArray[titleeArray.length - 1];

        if (titlee.charAt(0) === '/') {
            titlee = titlee.slice(1);
        }

        for (var item = 0; item < this.listTitles.length; item++) {
            var thisPath = this.listTitles[item].path;
            thisPath = thisPath.split('/')[1];

            if (thisPath.charAt(0) === '/') 
                thisPath = thisPath.slice(1);

            if (thisPath === titlee) 
                this.navTitle = this.listTitles[item].title;
        }
        return 'Dashboard';
    }
}
