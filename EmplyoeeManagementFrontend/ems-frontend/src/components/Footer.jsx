import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-4 bg-dark text-light py-3 fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; All rights reserved {new Date().getFullYear()} Meri Company</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
