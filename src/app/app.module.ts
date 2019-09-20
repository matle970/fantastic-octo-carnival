import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { LogoComponent } from './components/logo/logo.component';
import { UserComponent } from './components/user/user.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchIdComponent } from './components/search-id/search-id.component';

import {CdkTableModule} from '@angular/cdk/table';

import { SharedMaterialModule } from './shared-material/shared-material.module';

// services
import { SidebarService } from './services/sidebar.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';




@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    UserComponent,
    TabsComponent,
    FilterComponent,
    SearchIdComponent,
    DashboardComponent,
    CustomerComponent
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
    AppRoutingModule,
    RouterModule,


  ],
  providers: [
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
