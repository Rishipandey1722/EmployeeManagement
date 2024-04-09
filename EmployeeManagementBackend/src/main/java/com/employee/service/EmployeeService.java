package com.employee.service;
import java.util.List;
import com.employee.dto.EmployeeDto;



public interface EmployeeService {
	
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long employeeId);
	
	List<EmployeeDto> getAllEmployee();
	
	EmployeeDto updateEmployee(Long id , EmployeeDto newEmployeeDto);
	
	void deleteById(Long id);

}
