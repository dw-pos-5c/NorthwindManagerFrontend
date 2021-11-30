import { Component, OnInit } from '@angular/core';
import {BackendConnectorService} from "../../core/backend-connector.service";
import {ActivatedRoute} from "@angular/router";
import Order from "../../../models/Order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];

  customerId: string | undefined;
  employeeId: number | undefined;

  headers = ['Ordered', 'Required', 'Shipped', 'Nr Details', 'button'];

  heading: string | undefined;
  headingId: number | string | undefined;

  constructor(private backend: BackendConnectorService, private route: ActivatedRoute) {
    route.paramMap.subscribe(x => {
      const id = x.get('empOrCustId');
      if (!id) return;
      if(+id) {
        this.employeeId = +id;
        this.heading = 'Orders for employee ';
        this.headingId = +id;
      } else {
        this.customerId = id;
        this.heading = 'Orders for customer ';
        this.headingId = id;
      }
    });
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    if (this.customerId) {
      this.backend.getOrders(this.customerId).then(result => {
        this.orders = result;
      });
    }
    else if (this.employeeId) {
      this.backend.getOrders(this.employeeId).then(result => {
        this.orders = result;
        console.log(result);
      });
    }
    else {
      console.log('Error loading Orders');
    }
  }
}
