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
          <h1 className="text-center" style={{ marginBottom: 30 }}>
            Boxes
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <PricingCard
            heading={"$19.99"}
            subtext={"(Large) A Box/Month"}
            classes={
              "animate__animated animate__slideInRight redAnimationClass"
            }
          />
          <img
            src="https://image.flaticon.com/icons/png/512/81/81227.png"
            height={"30%"}
            width={"30%"}
            alt="Box Icon"
            style={{ marginLeft: "33.5%", marginTop: 10, marginBottom: 0 }}
          />
          <h2
            className="text-center"
            style={{
              marginLeft: 10,
              marginTop: 30,
              lineHeight: 1.25,
            }}
          >
            20" x 20" x 15"
          </h2>
        </Col>
        <Col>
          <PricingCard
            heading={"$14.99"}
            subtext={"(Medium) A Box/Month"}
            classes="animate__animated animate__fadeIn greenAnimationClass"
          />
          <img
            src="https://image.flaticon.com/icons/png/512/81/81227.png"
            height={"25%"}
            width={"25%"}
            alt="Box Icon"
            style={{ marginLeft: "40%", marginBottom: 0, marginTop: 30 }}
          />
          <h2
            className="text-center"
            style={{
              marginLeft: 10,
              marginTop: 43,
              lineHeight: 1.25,
            }}
          >
            18" x 14" x 12"
          </h2>
        </Col>
        <Col>
          <PricingCard
            heading={"$9.99"}
            subtext={"(Small) A Box/Month"}
            classes="animate__animated animate__slideInLeft blueAnimationClass"
          />
          <img
            src="https://image.flaticon.com/icons/png/512/81/81227.png"
            height={"20%"}
            width={"20%"}
            alt="Box Icon"
            style={{ marginLeft: "43%", marginBottom: 0, marginTop: 50 }}
          />
          <h2
            className="text-center"
            style={{
              marginLeft: 10,
              marginTop: 48,
              lineHeight: 1.25,
            }}
          >
            16" x 16" x 10"
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4
            className="text-center text-muted"
            style={{ marginTop: 60, fontWeight: 300 }}
          >
            Boxes Not To Scale
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeLine />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center" style={{ marginBottom: 30 }}>
            Appliances <span className="text-muted">(Cost Per Month)</span>
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <PricingCard
            heading="$29.99"
            subtext="Bike Storage"
            classes="orangeAnimationClass"
          />
          <div className="text-center">
            <i
              className="fas fa-bicycle"
              style={{ fontSize: 75, marginBottom: 60 }}
            />
          </div>
        </Col>
        <Col>
          <PricingCard
            heading="$14.99"
            subtext="Fridge Storage (1.8-2.7 cubic feet)"
            classes="orangeAnimationClass"
          />
          <div className="text-center">
            <i
              className="fas fa-cubes"
              style={{ fontSize: 75, marginBottom: 60 }}
            />
          </div>
        </Col>
        <Col>
          <PricingCard
            heading="$34.99"
            subtext="Twin Mattress Storage"
            classes="orangeAnimationClass"
          />
          <div className="text-center">
            <i
              className="fas fa-bed"
              style={{ fontSize: 75, marginBottom: 60 }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <PricingCard
            heading="$34.99"
            subtext="Storing a Table"
            classes="purpleAnimationClass"
          />
          <div className="text-center">
            <i
              className="fab fa-accusoft"
              style={{ fontSize: 75, marginBottom: 60 }}
            />
          </div>
        </Col>
        <Col>
          <PricingCard
            heading="$19.99"
            subtext="Storing a Small TV (< 35 inches)"
            classes="purpleAnimationClass"
          />
          <div className="text-center">
            <i
              className="fas fa-tv"
              style={{ fontSize: 50, marginBottom: 60 }}
            />
          </div>
        </Col>
        <Col>
          <PricingCard
            heading="$29.99"
            subtext="Storing a Big TV ( >= 35 inches)"
            classes="purpleAnimationClass"
          />
          <div className="text-center">
            <i
              className="fas fa-tv"
              style={{ fontSize: 75, marginBottom: 60 }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeLine />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center">Insurance</h1>
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
