import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Factory } from 'lucide-react';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link as any} to="/" className="d-flex align-items-center fw-bold text-industrial">
          <Factory className="me-2" size={28} />
          <span>PACKMACHINA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink as any} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink as any} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink as any} to="/industries">Industries</Nav.Link>
            <Nav.Link as={NavLink as any} to="/partners">Partners</Nav.Link>
            <Nav.Link as={NavLink as any} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink as any} to="/contact" className="btn btn-industrial text-white ms-lg-3 mt-3 mt-lg-0">
              Get in Touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
