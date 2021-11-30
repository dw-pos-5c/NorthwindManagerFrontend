import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { OrdersComponent } from './orders/orders.component';
import {MaterialModule} from "../material/material.module";
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LazyRoutingModule,
  ]
})
export class LazyModule { }
