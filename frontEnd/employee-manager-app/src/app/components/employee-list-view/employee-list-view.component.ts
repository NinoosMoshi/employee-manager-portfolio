import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-employee-list-view',
  templateUrl: './employee-list-view.component.html',
  styleUrls: ['./employee-list-view.component.css']
})
export class EmployeeListViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  showViewModal(){
    $('#viewModal').modal('show');
  }

}
