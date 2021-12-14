package com.ninos.controller;

import com.ninos.model.Employee;
import com.ninos.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


   // http://localhost:8080/api/employees
   @PostMapping("/employees")
   public ResponseEntity<?> saveEmployee(@RequestBody Employee employee){
       Employee employee1 = employeeService.saveEmployee(employee);
       return new ResponseEntity<>(employee1, HttpStatus.CREATED);
   }


   // http://localhost:8080/api/employees/{employeeId}
   @DeleteMapping("/employees/{employeeId}")
   public ResponseEntity<?> deleteEmployee(@PathVariable Long employeeId){
      employeeService.deleteEmployee(employeeId);
      return new ResponseEntity<>(HttpStatus.OK);
   }


   // http://localhost:8080/api/employees
    @GetMapping("/employees")
    public ResponseEntity<?> getAllEmployees(){
        List<Employee> employeeList = employeeService.getAllEmployee();
        return ResponseEntity.ok(employeeList);
    }




}
