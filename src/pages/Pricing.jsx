import React from "react";
import HomeLine from "../components/HomeLine";

import { Row, Col } from "react-bootstrap";
import PricingRow from "../components/PricingRow";

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
      <PricingRow
        price={30}
        text="          We can store your boxes for the whole summer for only $30 a box! Our
          competitiors charge anywhere from 25-50% more than that, and they
          don't move for you! Now that's what you call a bargain."
      />
      <Row>
        <Col>
          <HomeLine />
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
