import React from "react";
import { Col, Row } from "react-bootstrap";
import HomeLine from "../components/HomeLine";

const AboutUs = () => {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="text-center" style={{ marginTop: 30 }}>
            About Us
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeLine />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-center">Who are we?</h3>
          <p
            className="text-center"
            style={{ width: "80%", marginLeft: "10%", marginTop: 30 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeLine />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
