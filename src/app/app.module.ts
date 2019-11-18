import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// 客戶視圖裏的 component
import { CompanyModule } from './customer/customer-child/customer-child.module';

import { AppComponent } from './app.component';

import { CdkTableModule } from '@angular/cdk/table';

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
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { LogoComponent } from './content-layout/common-area/logo/logo.component';
import { UserComponent } from './content-layout/common-area/user/user.component';
import { TabsComponent } from './content-layout/common-area/tabs/tabs.component';
import { SearchIdComponent } from './content-layout/common-area/search-id/search-id.component';
import { TimeoutComponent } from './content-layout/common-area/timeout/timeout-component';
import { CommonAreaModule } from './content-layout/common-area/common-area.module';

@NgModule({
    declarations: [
        AppComponent,
        ContentLayoutComponent,
        LogoComponent,
        UserComponent,
        TabsComponent,
        SearchIdComponent,
        DashboardComponent,
        CustomerComponent,
        DialogComponent,
        ColumnToggleComponent,
        TimeoutComponent
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
    constructor(
        private injector: Injector) {
        InjectService.injector = this.injector;
    }
}
