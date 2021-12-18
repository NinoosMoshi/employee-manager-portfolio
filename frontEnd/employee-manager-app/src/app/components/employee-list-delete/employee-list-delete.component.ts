import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/model/employee';

declare var $: any;

@Component({
  selector: 'app-employee-list-delete',
  templateUrl: './employee-list-delete.component.html',
  styleUrls: ['./employee-list-delete.component.css']
})
export class EmployeeListDeleteComponent implements OnInit {

  @Output() confirmed = new EventEmitter<any>();

  @Input() employee: Employee = new Employee();

  constructor() { }

  ngOnInit(): void {
  }

  deleteEmployee() {
    this.confirmed.emit();
    $('#deleteModal').modal('hide');
  }

  showDeleteModal() {
    $('#deleteModal').modal('show');
  }

}
