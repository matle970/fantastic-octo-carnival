import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoIconComponent } from './logo-icon/logo.component';
import { TreeLogoComponent } from './tree-logo/tree-logo.component';
import { AccountComponent } from './account/account.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    LogoIconComponent,
    TreeLogoComponent,
    NavbarComponent,
    SidebarComponent,
    AccountComponent,
    FilterComponent
  ],
  exports: [
    HeaderComponent,
    LogoIconComponent,
    TreeLogoComponent,
    NavbarComponent,
    SidebarComponent,
    AccountComponent,
    FilterComponent
  ]
})
export class ComponentsModule { }
