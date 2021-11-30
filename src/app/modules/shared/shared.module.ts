import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import { EllipsisNotationPipe } from './pipes/ellipsis-notation.pipe';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    CustomersComponent,
    EllipsisNotationPipe,
    EmployeesComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ]
})
export class SharedModule { }
