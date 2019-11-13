import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app.routing';
import { CommonAreaModule } from './common-area/common-area.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// 客戶視圖裏的 component
import { CompanyModule } from './customer/customer-child/customer-child.module';

import { AppComponent } from './app.component';

import { LogoComponent } from './common-area/logo/logo.component';
import { UserComponent } from './common-area/user/user.component';
import { TabsComponent } from './common-area/tabs/tabs.component';
import { SearchIdComponent } from './common-area/search-id/search-id.component';

import {CdkTableModule} from '@angular/cdk/table';

import { SharedMaterialModule } from './objects/shared-material/shared-material.module';

// services
import { SidebarService } from './services/sidebar.service';
import { ModalService } from './services/modal.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';

// Dialog
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentModule } from './dialog/dialog-content/dialog-content.module';
import { IconSvgModule } from './objects/icon-svg/icon-svg.module';
import { SharedItemModule } from './objects/shared-item/shared-item.module';
import { InjectService } from './services/inject.service';
import { ColumnToggleComponent } from './dashboard/column-toggle/column-toggle.component';

import { EnvServiceProvider } from '../environments/EnvServiceProvider';
import { AoIdentityService } from './objects/share-data/ao-identity-service';
import { CustomerInfoService } from './objects/share-data/customer-info-service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    UserComponent,
    TabsComponent,
    SearchIdComponent,
    DashboardComponent,
    CustomerComponent,
    DialogComponent,
    ColumnToggleComponent
  ],
  imports: [
    SharedMaterialModule,
    CdkTableModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonAreaModule,
    CompanyModule,
    IconSvgModule,
    DialogContentModule,
    AppRoutingModule,
    RouterModule,
    SharedItemModule
  ],
  providers: [
    EnvServiceProvider,
    SidebarService,
    ModalService,
    DatePipe,
    AoIdentityService,
    CustomerInfoService
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectService.injector = this.injector;
  }
 }
