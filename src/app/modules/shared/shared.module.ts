import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import { EllipsisNotationPipe } from './pipes/ellipsis-notation.pipe';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    CustomersComponent,
    EllipsisNotationPipe,
    EmployeesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ]
})
export class SharedModule { }
