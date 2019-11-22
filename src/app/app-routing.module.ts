import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { TimeoutComponent } from './content-layout/common-area/timeout/timeout.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { RoutingTimeout } from './services/common-services/routing-timeout.service';
import { RoutingGuard } from './services/common-services/routing-guard.service';

const AppRoutes: Routes = [
    {
        path: 'content',
        component: ContentLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                // canActivate: [RoutungGuard]
                canActivate: [RoutingTimeout]
            },
            {
                path: 'customer',
                component: CustomerComponent,
                canActivate: [RoutingGuard, RoutingTimeout],
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
        RoutingGuard,
        RoutingTimeout
    ]
})

export class AppRoutingModule { }