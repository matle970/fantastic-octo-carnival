import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

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
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';

// Dialog
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentModule } from './dialog-content/dialog-content.module';
import { IconSvgModule } from './icon-svg/icon-svg.module';


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
  ],
  providers: [
    SidebarService
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
