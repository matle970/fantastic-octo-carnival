import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { CustomerComponent } from 'src/app/customer/customer.component';


export const MainLayoutRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'customer',      component: CustomerComponent },
];
