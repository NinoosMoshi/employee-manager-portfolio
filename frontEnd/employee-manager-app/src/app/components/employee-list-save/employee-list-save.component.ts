import { Employee } from './../../model/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-employee-list-save',
  templateUrl: './employee-list-save.component.html',
  styleUrls: ['./employee-list-save.component.css']
})


export class EmployeeListSaveComponent implements OnInit {

  errorMessage: string = '';

  employee: Employee = new Employee();

  @Output() save = new EventEmitter();


  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }


  saveEmployee(){
    this.employeeService.saveEmployee(this.employee).subscribe({
      next: data =>{
         this.save.emit(data);
         $('#employeeModal').modal('hide');
      },
      error: err =>{
        this.errorMessage = 'Unexpected error occured';
      }
    })
  }


  showEmployeeModal(){
    $('#employeeModal').modal('show');
  }

}
