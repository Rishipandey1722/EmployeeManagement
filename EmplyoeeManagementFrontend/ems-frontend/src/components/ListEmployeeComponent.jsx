import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { deleteEmployee, listEmployee } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    getAllEmployees();
  });

  const navigator = useNavigate();
  const addNewEmployee = (id) => navigator("/add-employee");

  const getAllEmployees = () => {  
    listEmployee()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateEmployee = (id) => navigator(`/edit-employee/${id}`);

  
  const removeEmployee = (id) => {
    deleteEmployee(id)
      .then((response) => {
        getAllEmployees()
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2 className="text-center mb-4">List of Employees</h2>
          <Button variant="primary" onClick={addNewEmployee}>
            Add Employee
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => updateEmployee(emp.id)}
                    >
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeEmployee(emp.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ListEmployeeComponent;
