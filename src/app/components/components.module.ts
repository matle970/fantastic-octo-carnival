import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from './../shared-material/shared-material.module';


import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoIconComponent } from './logo-icon/logo.component';
import { TreeLogoComponent } from './tree-logo/tree-logo.component';
import { AccountComponent } from './account/account.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LogoWhiteComponent } from './logo-white/logo-white.component';
import { NoticeIconComponent } from './notice-icon/notice-icon.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  declarations: [
    HeaderComponent,
    LogoIconComponent,
    TreeLogoComponent,
    NavbarComponent,
    SidebarComponent,
    AccountComponent,
    FilterComponent,
    PaginationComponent,
    LogoWhiteComponent,
    NoticeIconComponent,
  ],
  exports: [
    HeaderComponent,
    LogoIconComponent,
    TreeLogoComponent,
    NavbarComponent,
    SidebarComponent,
    AccountComponent,
    FilterComponent,
    PaginationComponent,
    LogoWhiteComponent,
    NoticeIconComponent,
  ]
})
export class ComponentsModule { }
