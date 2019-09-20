import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedMaterialModule } from '../../shared-material/shared-material.module';
import { MainLayoutRoutes } from './main-layout.routing';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { CustomerComponent } from 'src/app/customer/customer.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { SearchIdComponent } from 'src/app/components/search-id/search-id.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ],
  declarations: [
    DashboardComponent,
    CustomerComponent,
    LogoComponent,
    UserComponent,
    FilterComponent,
    SearchIdComponent,
    DashboardComponent,
    CustomerComponent
  ]
})

export class MainLayoutModule {}
