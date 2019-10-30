import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// 客戶視圖裏的 component
import { CompanyModule } from './company/company.module';

import { AppComponent } from './app.component';

import { LogoComponent } from './components/logo/logo.component';
import { UserComponent } from './components/user/user.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SearchIdComponent } from './components/search-id/search-id.component';

import {CdkTableModule} from '@angular/cdk/table';

import { SharedMaterialModule } from './shared-material/shared-material.module';

// services
import { SidebarService } from './services/sidebar.service';
import { ModalService } from './services/modal.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';

// Dialog
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentModule } from './dialog-content/dialog-content.module';
import { IconSvgModule } from './icon-svg/icon-svg.module';
import { SharedItemModule } from './shared-item/shared-item.module';
import { InjectService } from './services/inject.service';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    UserComponent,
    TabsComponent,
    SearchIdComponent,
    DashboardComponent,
    CustomerComponent,
    DialogComponent
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
    ComponentsModule,
    CompanyModule,
    IconSvgModule,
    DialogContentModule,
    AppRoutingModule,
    RouterModule,
    SharedItemModule
  ],
  providers: [
    SidebarService,
    ModalService,
    DatePipe
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectService.injector = this.injector;
  }
}
