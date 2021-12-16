import { EmployeeListSaveComponent } from './../employee-list-save/employee-list-save.component';
import { Employee } from './../../model/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employess!:Employee[];

  @ViewChild(EmployeeListSaveComponent) saveEmployee:EmployeeListSaveComponent | undefined;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployess();
  }


  getEmployess(){
    this.employeeService.getEmployees().subscribe(data =>{
      this.employess = data;
    })
  }

  createProductRequest(){
    this.saveEmployee?.showEmployeeModal();
  }

}
