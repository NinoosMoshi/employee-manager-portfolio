import { Employee } from './../model/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employees';

  constructor(private http: HttpClient) { }


  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }


  saveEmployee(employee: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  deleteCourse(employee: Employee): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${employee.id}`);
  }


}
