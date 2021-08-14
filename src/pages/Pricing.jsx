import React from "react";
import HomeLine from "../components/HomeLine";

import { Row, Col } from "react-bootstrap";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="text-center" style={{ marginTop: 30 }}>
            Pricing
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
          <PricingCard />
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

export default Pricing;
