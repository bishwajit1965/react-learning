import React from "react";
import { Outlet, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Button,
  Nav,
  Container,
  NavDropdown,
  FormControl,
  Form,
} from "react-bootstrap";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import NoPage from "../pages/NoPage";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";

const NavBar = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" expand="lg" class="text-white" variant="dark">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              Navbar scroll
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
                <Nav.Link as={Link} to="blogs">
                  Blogs
                </Nav.Link>
                <Nav.Link as={Link} to="contactUs">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="aboutUs">
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

        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </>
  );
};

export default NavBar;
