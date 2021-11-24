import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./modules/shared/customers/customers.component";
import {EmployeesComponent} from "./modules/shared/employees/employees.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'orders/:empOrCustId',
    loadChildren: () => import('src/app/modules/lazy/lazy.module').then(x => x.LazyModule),
  },
  {
    path: 'orders/details/:id',
    component: CustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
