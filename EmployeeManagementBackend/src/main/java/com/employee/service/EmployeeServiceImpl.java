package com.employee.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.dto.EmployeeDto;
import com.employee.entity.Employee;
import com.employee.exception.ResourceNotFoundException;
import com.employee.mapper.EmployeeMapper;
import com.employee.repository.EmployeeRepository;




@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		
		Employee savedEmployee = this.employeeRepository.save(employee);
		
		
		
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}
	
	
	
	
	

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		
		 Employee employee=	employeeRepository.findById(employeeId)
			.orElseThrow(() ->
			
						new ResourceNotFoundException("Employee with given Id doesnot Exist" +employeeId)
			
					);
		return EmployeeMapper.mapToEmployeeDto(employee);
	}
	
	




	@Override
	public List<EmployeeDto> getAllEmployee() {
		
		List<Employee> allEmployees   = employeeRepository.findAll();
		
		return allEmployees.stream().map((emp)-> EmployeeMapper.mapToEmployeeDto(emp))
				.collect(Collectors.toList())
				
				;
	}
	
	




	@Override
	public EmployeeDto updateEmployee(Long id, EmployeeDto newEmployeeDto) {
		
		
		
		Employee employee= employeeRepository.findById(id).orElseThrow(
				() ->
				new ResourceNotFoundException("Employee with id doesn't exist" + id)
				);
		
		
		employee.setFirstName(newEmployeeDto.getFirstName());
		employee.setLastName(newEmployeeDto.getLastName());
		employee.setEmail(newEmployeeDto.getEmail());
		
		Employee updEmployee = employeeRepository.save(employee);
		
		
		return EmployeeMapper.mapToEmployeeDto(updEmployee);
	}
	
	




	@Override
	public void deleteById(Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(
				()-> new ResourceNotFoundException("Employee with given id doesn't Exist" +id)
				
				);
		employeeRepository.deleteById(id);
		
	}

}
