import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BackendConnectorService} from "../../core/backend-connector.service";
import OrderDetail from "../../../models/OrderDetail";
import {Sort} from "@angular/material/sort";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id: number | undefined;

  orderDetails: OrderDetail[] = [];

  headers = ['Quantity', 'UnitPrice', 'Product'];

  heading = 'OrderDetails for Order';
  headingId: number | undefined;

  constructor(private backend: BackendConnectorService, private route: ActivatedRoute,
              private router: Router) {
    route.paramMap.subscribe(x => {
      const id = x.get('id');
      if (id) {
        this.id = +id;
        this.headingId = +id;
      }
    });
  }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails(): void {
    if (this.id) {
      this.backend.getOrderDetails(this.id).then(result => {
        this.orderDetails = result;
      });
    }
  }

  navigate(navigateBy: number) : void {
    if (this.id) {
      this.id += navigateBy
      this.router.navigateByUrl(`/orders/details/${this.id}`);
      this.getOrderDetails();
    }
  }

  sortChanged(sort: Sort) {
    const data = this.orderDetails.slice();
    if (!sort.active || sort.direction === '') {
      this.orderDetails = data;
      return;
    }

    this.orderDetails = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Quantity':
          return compare(a.quantity, b.quantity, isAsc);
        case 'UnitPrice':
          return compare(a.unitPrice, b.unitPrice, isAsc);
        case 'Product':
          return compare(a.productName, b.productName, isAsc);
        default:
          return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
