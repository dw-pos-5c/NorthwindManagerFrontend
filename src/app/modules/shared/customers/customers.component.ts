import { Component, OnInit } from '@angular/core';
import {BackendConnectorService} from "../../core/backend-connector.service";
import Customer from "../../../models/Customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  headers = ['Company', 'Contact', 'City', 'Country', 'button'];

  constructor(private backend: BackendConnectorService) { }

  ngOnInit(): void {
    this.backend.getCustomers().then(result => this.customers = result);
  }

}
