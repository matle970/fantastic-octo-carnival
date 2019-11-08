import { Component, OnInit, ElementRef} from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/objects/services/sidebar.service';
import { onSideNavChange, animateText } from 'src/app/common-area/animations/animations';

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

    navTitle = 'Dashboard';

    constructor(location: Location,
      private element: ElementRef, private router: Router,
      private _sidebarService: SidebarService) {
      this.location = location;
      this.sidebarVisible = false;
      router.events.subscribe((val) => {
        // see also
        // console.log(val);
        this.getTitle();
      });

    }

    ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;

      // setTimeout(() => {
      //   this.getTitle();
      // }, 400);
      // this.navTitle = this.getTitle();

      // 移除mobile版本

    //   this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    //   this.router.events.subscribe((event) => {
    //     this.sidebarClose();
    //      var $layer: any = document.getElementsByClassName('close-layer')[0];
    //      if ($layer) {
    //        $layer.remove();
    //        this.mobile_menu_visible = 0;
    //      }
    //  });
    }
    onSidebarToggle() {
      this.sideNavState = !this.sideNavState;
      this._sidebarService.sideNavState$.next(this.sideNavState);
    }


    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
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


    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      // console.log('first titlee',titlee);
      var titleeArray = titlee.split('/');
      titlee = titleeArray[titleeArray.length - 1 ];

      if(titlee.charAt(0) === '/'){
          titlee = titlee.slice( 1 );
      }
      // console.log(titlee);
      for(var item = 0; item < this.listTitles.length; item++){
        // console.log(this.listTitles[item].path);
        // tslint:disable-next-line: prefer-const

        var thisPath = this.listTitles[item].path;
        thisPath= thisPath.split('/')[1];

        if(thisPath.charAt(0) === '/'){
          thisPath = thisPath.slice( 1 );
        }
        // console.log(thisPath,'thispath')
        // console.log(titlee,'titlee')

        // console.log('是否等於',thisPath === titlee);
          if(thisPath === titlee){
              // return this.listTitles[item].title;
              this.navTitle = this.listTitles[item].title;
          }

          // if(titlee.includes(thisPath)) {
          //   // console.log('if match',thisPath)
          //   return  this.listTitles[item].title;
          // }
      }
      return 'Dashboard';
    }
}
