import React from "react";
import { Row, Col } from "react-bootstrap";
import PricingCard from "./PricingCard";

const PricingRow = ({ price, text }) => {
  return (
    <Row>
      <Col>
        <PricingCard price={price} />
      </Col>
      <Col>
        <div>
          <p
            className="fadeInPriceTextAnimation text-center"
            style={{
              marginTop: "12%",
              marginRight: 45,
              fontSize: 20,
              verticalAlign: "middle",
            }}
          >
            {text}
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default PricingRow;
