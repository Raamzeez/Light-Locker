import React, { FC } from "react";

import { useHistory } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const HomeNavbar: FC = () => {
  const history = useHistory();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => history.push("/about")}>About Us</Nav.Link>
            <Nav.Link onClick={() => history.push("/pricing")}>
              Pricing
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/cart")}>Cart</Nav.Link>
            <Nav.Link onClick={() => history.push("/reviews")}>
              Reviews
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
