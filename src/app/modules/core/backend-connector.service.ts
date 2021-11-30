import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Customer from "../../models/Customer";
import Employee from "../../models/Employee";
import Order from "../../models/Order";
import OrderDetail from "../../models/OrderDetail";

@Injectable()
export class BackendConnectorService {

  private ulr = 'http://localhost:5000/Northwind'

  constructor(private http: HttpClient) {
  }

  getCustomers(): Promise<Customer[]> {
    return this.http.get<Customer[]>(`${this.ulr}/Customers`).toPromise();
  }

  getEmployees(): Promise<Employee[]> {
    return this.http.get<Employee[]>(`${this.ulr}/Employees`).toPromise();
  }

  getOrders(id: number | string): Promise<Order[]> {
    if (typeof id === typeof '') {
      return this.http.get<Order[]>(`${this.ulr}/OrdersFromCustomer/${id}`).toPromise();
    }
    else {
      return this.http.get<Order[]>(`${this.ulr}/OrdersFromEmployee/${id}`).toPromise();
    }
  }

  getOrderDetails(id: number): Promise<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(`${this.ulr}/OrderDetails/${id}`).toPromise();
  }
}
