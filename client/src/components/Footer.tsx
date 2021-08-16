import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: FC = () => {
  return (
    <footer
      className="text-center"
      style={{ backgroundColor: "rgb(246, 247, 249)" }}
    >
      <Container>
        <Row>
          <Col className="text-center py-4">
            <h5 style={{ color: "#199c70" }}>Contact Information</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 style={{ marginBottom: 30 }}>
              <a href="tel:4131111111">Phone Number: ##########</a>
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
