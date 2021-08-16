import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import HomeLine from "../components/HomeLine";
import PricingCard from "../components/PricingCard";
import { addToCart } from "../lib/util/addToCart";

const Pricing: FC = () => {
  return (
    <div>
      <ToastContainer />
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
            onClickHandler={() => addToCart("Large Box", "fas fa-box-open")}
          />
          <div className="text-center">
            <i
              className="fas fa-box-open"
              style={{ fontSize: 100, marginBottom: 30, marginTop: 30 }}
            />
          </div>
          <h2
            className="text-center"
            style={{
              marginLeft: 10,
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
            onClickHandler={() => addToCart("Medium Box", "fas fa-box-open")}
          />
          <div className="text-center">
            <i
              className="fas fa-box-open"
              style={{ fontSize: 80, marginBottom: 50, marginTop: 30 }}
            />
          </div>
          <h2
            className="text-center"
            style={{
              marginLeft: 10,
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
            onClickHandler={() => addToCart("Small Box", "fas fa-box-open")}
          />
          <div className="text-center">
            <i
              className="fas fa-box-open"
              style={{ fontSize: 60, marginBottom: 70, marginTop: 30 }}
            />
          </div>
          <h2
            className="text-center"
            style={{
              marginLeft: 10,
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
            onClickHandler={() => addToCart("Bike Storage", "fas fa-bicycle")}
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
            onClickHandler={() => addToCart("Fridge Storage", "fas fa-cubes")}
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
            onClickHandler={() =>
              addToCart("Twin Mattress Storage", "fas fa-bed")
            }
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
            onClickHandler={() => addToCart("Table Storage", "fab fa-accusoft")}
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
            onClickHandler={() => addToCart("Small TV Storage", "fas fa-tv")}
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
            onClickHandler={() => addToCart("Large TV Storage", "fas fa-tv")}
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
