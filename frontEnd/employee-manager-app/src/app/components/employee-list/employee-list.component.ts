import { EmployeeListDeleteComponent } from './../employee-list-delete/employee-list-delete.component';
import { EmployeeListViewComponent } from './../employee-list-view/employee-list-view.component';
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

  errorMessage:string='';

  selectEmployee: Employee = new Employee();

  @ViewChild(EmployeeListSaveComponent) saveEmployee:EmployeeListSaveComponent | undefined;

  @ViewChild(EmployeeListViewComponent) viewEmployee:EmployeeListViewComponent | undefined;

  @ViewChild(EmployeeListDeleteComponent) deleteComponent:EmployeeListDeleteComponent | undefined;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployess();
  }


  getEmployess(){
    this.employeeService.getEmployees().subscribe(data =>{
      this.employess = data;
    })
  }

  createEmployeeRequest(){
    this.selectEmployee = new Employee();
    this.saveEmployee?.showEmployeeModal();
  }

  editEmployeeRequest(item: Employee){
    this.selectEmployee = Object.assign({}, item);
    this.saveEmployee?.showEmployeeModal();
  }

  viewEmployeeRequest(item: Employee){
    this.selectEmployee = item;
    this.viewEmployee?.showViewModal();
  }

  deleteEmployeeRequest(item: Employee){
    this.selectEmployee = item;
    this.deleteComponent?.showDeleteModal();
  }


  receivedFromSave(employee: Employee){

    let itemIndex = this.employess.findIndex(item => item.id === employee.id);

    if(itemIndex !== -1){
      this.employess[itemIndex] = employee;
    }else{
      this.employess.push(employee);
    }
  }


  deleteEmployee(){
    let itemIndex = this.employess.findIndex(item => item.id === this.selectEmployee.id);

    this.employeeService.deleteCourse(this.selectEmployee).subscribe({
      next: data =>{
         this.employess.splice(itemIndex,1);
      },
      error: err =>{
        this.errorMessage = 'Unexpected error occurred';
        console.log(err);
      }
    })
  }

}
