import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

import { FranchiseComponent } from './franchise/franchise.component';
import { OperatorComponent } from './operator/operator.component';
import { CustomerComponent } from './customer/customer.component';
import { DriverCreateComponent } from './driver/driver-create/driver-create.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'driver-form', component: DriverCreateComponent},
  {path: 'franchise', component: FranchiseComponent},
  {path: 'operator', component: OperatorComponent},
  {path: 'driver-list',component:DriverListComponent},
  {path: 'driver-detail',component:DriverDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
