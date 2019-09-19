import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../services/sidebar.service';
import { onMainContentChange } from './../../animations/animations';
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
  }

}
