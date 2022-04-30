import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Container fluid className="  py-2">
        <Row className="bg-secondary text-white">
          <Col>One</Col>
          <Col>Two</Col>
          <Col>Three</Col>
          <Col>Four</Col>
        </Row>
        <Row>
          <Col className="bg-dark text-white text-center">
            &copy; All rights reserved
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
