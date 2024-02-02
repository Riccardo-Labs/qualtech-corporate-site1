import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link as any} to="/">
          <img src="/logo-1024x195.png" alt="Qualtech" style={{ height: '36px', width: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink as any} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink as any} to="/industries">Industries</Nav.Link>
            <Nav.Link as={NavLink as any} to="/partners">Partners</Nav.Link>
            <Nav.Link as={NavLink as any} to="/about">About</Nav.Link>
            <Button as={Link as any} to="/contact" className="btn-industrial text-white ms-lg-3 mt-3 mt-lg-0" style={{ borderRadius: '34px', padding: '6px 16px', fontSize: '0.875rem', fontWeight: 400, letterSpacing: 'normal', textTransform: 'none' }}>
              Get in Touch
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
