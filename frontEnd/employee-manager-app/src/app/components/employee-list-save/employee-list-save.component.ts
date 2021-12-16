import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-employee-list-save',
  templateUrl: './employee-list-save.component.html',
  styleUrls: ['./employee-list-save.component.css']
})



export class EmployeeListSaveComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  showEmployeeModal(){
    $('#employeeModal').modal('show');
  }

}
