import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Student Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Student">Student</Nav.Link>
            <Nav.Link href="#Display">Display</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
