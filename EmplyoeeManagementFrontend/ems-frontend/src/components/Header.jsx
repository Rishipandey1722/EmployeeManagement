import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          <Link to= '/' className='nav-link'>Home</Link>
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          {/* Add more Nav.Link components for navigation */}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
