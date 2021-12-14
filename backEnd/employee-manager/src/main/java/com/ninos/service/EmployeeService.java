package com.ninos.service;

import com.ninos.model.Employee;

import java.util.List;

public interface EmployeeService {

    public Employee createEmployee(Employee employee);
    public void deleteEmployee(Long employeeId);
    public List<Employee> getAllEmployee();



}
