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

// common-services
import { SidebarService } from './services/common-services/sidebar.service';
import { ModalService } from './services/common-services/modal.service';
import { AoIdentityService } from './services/common-services/ao-identity.service';
import { CustomerIdService } from './services/common-services/customerid.service';
import { TrustkeyServeice } from './services/common-services/trustkey.service';
import { TimeoutService } from './services/common-services/timeout.service';
import { TokenService } from './services/common-services/token.service';
import { InjectService } from './services/common-services/inject.service';
import { DialogService } from './services/common-services/dialog.service';

// customer services
import { NewsService } from './services/customer/cust-news/news.service';


// environments
import { EnvServiceProvider } from '../environments/EnvServiceProvider';

// 客製 Pipe
import { CustomPipeModule } from './custom-pipe/custom-pipe.module';
import { DummyDataService } from './services/common-services/dummydata.service';

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
        SharedItemModule,
        CustomPipeModule
    ],
    providers: [
        EnvServiceProvider,
        SidebarService,
        ModalService,
        DatePipe,
        AoIdentityService,
        CustomerIdService,
        TokenService,
        TrustkeyServeice,
        TimeoutService,
        DummyDataService,
        NewsService,
        DialogService

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
