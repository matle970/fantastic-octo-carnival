import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch:'full',
    // component: MainLayoutComponent
  },
  {
    path: 'dashboard',
    component: MainLayoutComponent
  },
  {
    path:'customer',
    component:MainLayoutComponent
  }
  // { path: 'path2', component: Name2Component },
  // { path: 'path3', component: Name3Component },
  // { path: 'path4', component: Name4Component },
  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
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
})
export class AppRoutingModule {}
