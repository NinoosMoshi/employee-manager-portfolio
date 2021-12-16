import { Employee } from './../../model/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employess!:Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployess();
  }


  getEmployess(){
    this.employeeService.getEmployees().subscribe(data =>{
      this.employess = data;
    })
  }

}
