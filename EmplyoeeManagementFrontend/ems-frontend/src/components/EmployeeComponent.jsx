import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email };

    if (id) {
      updateEmployee(id, employee)
        .then((response) => {
          navigator("/employee");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createEmployee(employee).then((response) => {
        navigator("/employee");
      }).catch(error =>{
        console.error(error)
      });
    }
  }

  function pageTitle() {
    if (id) return <h2 className="text-center">Update Employee</h2>;
    else return <h2 className="text-center">Add Employee</h2>;
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}

          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter the first Name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={handleFirstName}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter the Last Name"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={handleLastName}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter the Email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={handleEmail}
                ></input>
              </div>

              <div>
                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateEmployee}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
