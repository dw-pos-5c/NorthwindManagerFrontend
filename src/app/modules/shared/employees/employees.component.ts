import { Component, OnInit } from '@angular/core';
import {BackendConnectorService} from "../../core/backend-connector.service";
import Employee from "../../../models/Employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  headers = ['Name', 'City', 'Country', 'button'];

  constructor(private backend: BackendConnectorService, private router: Router) { }

  ngOnInit(): void {
    this.backend.getEmployees().then(result => {
      this.employees = result;
    });
  }

  navigate(id: number): void {
    this.router.navigateByUrl(`orders/${id}`);
  }
}
