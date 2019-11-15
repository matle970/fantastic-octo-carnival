import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './services/authGuard';
import { TimeoutComponent } from './content-layout/common-area/timeout/timeout-component';


const routes: Routes = [
  {
    path: 'timeout',
    component: TimeoutComponent
  },
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch:'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'customer',
    component: CustomerComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {}
