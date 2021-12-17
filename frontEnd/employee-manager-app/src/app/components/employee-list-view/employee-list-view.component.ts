import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

declare var $:any;

@Component({
  selector: 'app-employee-list-view',
  templateUrl: './employee-list-view.component.html',
  styleUrls: ['./employee-list-view.component.css']
})
export class EmployeeListViewComponent implements OnInit {

  @Input() employee: Employee = new Employee();

  constructor() { }

  ngOnInit(): void {
  }


  showViewModal(){
    $('#viewModal').modal('show');
  }

}
