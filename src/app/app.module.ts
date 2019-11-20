// @angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// content-layout
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { LogoComponent } from './content-layout/common-area/logo/logo.component';
import { UserComponent } from './content-layout/common-area/user/user.component';
import { TabsComponent } from './content-layout/common-area/tabs/tabs.component';
import { SearchIdComponent } from './content-layout/common-area/search-id/search-id.component';
import { TimeoutComponent } from './content-layout/common-area/timeout/timeout.component';
import { CommonAreaModule } from './content-layout/common-area/common-area.module';

// customer
import { CustomerComponent } from './customer/customer.component';
import { CompanyModule } from './customer/customer-child/customer-child.module';

// dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
import { ColumnToggleComponent } from './dashboard/column-toggle/column-toggle.component';

// Dialog
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentModule } from './dialog/dialog-content/dialog-content.module';

// objects
import { SharedMaterialModule } from './objects/shared-material/shared-material.module';
import { IconSvgModule } from './objects/icon-svg/icon-svg.module';
import { SharedItemModule } from './objects/shared-item/shared-item.module';
import { AoIdentityService } from './common-services/ao-identity.service';
import { CustomerInfoService } from './common-services/customerid.service';

// common-services
import { SidebarService } from './common-services/sidebar.service';
import { ModalService } from './common-services/modal.service';
import { InjectService } from './common-services/inject.service';
import { TimeoutService } from './common-services/timeout.service';
import { TokenService } from './common-services/token.service';
import { TrustkeyServeice } from './common-services/trustkey.service';

// environments
import { EnvServiceProvider } from '../environments/EnvServiceProvider';

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
        CustomerInfoService,
        TokenService,
        TrustkeyServeice,
        TimeoutService
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
