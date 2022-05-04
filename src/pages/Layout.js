import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Navbar,
  Button,
  Nav,
  Container,
  NavDropdown,
  FormControl,
  Form,
} from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" class="text-white" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            React Learning
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/contactUs">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutUs">
                About Us
              </Nav.Link>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
