import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import myImg from "../assets/images/std.avif";  // Ensure correct path


const Home = () => {
  return (
    <Container fluid className="text-white d-flex align-items-center justify-content-center" id="Home" style={{
      backgroundImage: `url(${myImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",  // Full height
      width: "100%",   // Full width
      padding: "20px"
    }}>
      <Row className="text-center">
        <Col>
          <h1 className="fw-bold">Welcome to Student Management System</h1>
          <p className="text-muted">
            Manage student records, performance, and details efficiently.
          </p>
          <Button variant="primary" href="#Student" className="me-2">
            Add Student
          </Button>
          <Button variant="success" href="#Display">
            View Students
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
