import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './services/authguard.service';
import { TimeoutComponent } from './content-layout/common-area/timeout/timeout.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

const AppRoutes: Routes = [
    {
        path: 'content',
        component: ContentLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                // canActivate: [AuthGuard]
            },
            {
                path: 'customer',
                component: CustomerComponent,
                canActivate: [AuthGuard]
            },
            {
                path: '**',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }
        ]
    },
    {
        path: 'timeout',
        component: TimeoutComponent
    },
    {
        path: '**',
        redirectTo: 'content',
        pathMatch: 'full',
    }
];
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(AppRoutes, {
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

export class AppRoutingModule { }