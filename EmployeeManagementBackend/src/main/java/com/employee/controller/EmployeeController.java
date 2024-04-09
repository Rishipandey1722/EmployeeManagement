package com.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.dto.EmployeeDto;
import com.employee.service.EmployeeService;




@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
	
	
	@Autowired
	private EmployeeService employeeService;
	
	//Build add employee restAPi
	
	@PostMapping
	public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
		EmployeeDto savEmployeeDto = employeeService.createEmployee(employeeDto);
		
		return new ResponseEntity<>(savEmployeeDto , HttpStatus.CREATED);
	}
	
	
	
	
	
	
	// Build get Employee by id RestApi
	
	@GetMapping("{id}")
	public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long id){
		
		EmployeeDto employeeDto =  employeeService.getEmployeeById(id);
		System.out.println(employeeDto);
		return new ResponseEntity<>(employeeDto , HttpStatus.OK);
	}
	
	
	
	
	
	
	// Build get All Employee  RestApi
	
	@GetMapping
	public ResponseEntity<List<EmployeeDto>> getAllEmployee(){
		List<EmployeeDto> allEmployeeDtos = employeeService.getAllEmployee();
		
		return new ResponseEntity<>(allEmployeeDtos , HttpStatus.OK);
	}
	
	
	
	
	
	// Build update Employee by id RestApi
	
	@PutMapping("{id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long id , @RequestBody EmployeeDto newEmployeeDto){
		
		EmployeeDto updatedEmployeeDto = employeeService.updateEmployee(id, newEmployeeDto);
		
		return new ResponseEntity<>(updatedEmployeeDto , HttpStatus.OK);
	}
	
	
	
	
	// Build delete Employee by id 

	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long id){
		
		employeeService.deleteById(id);
		
		return new ResponseEntity<>("Deleted succesfully !!" , HttpStatus.OK);
	}
	
	

	
	

}
