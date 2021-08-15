import React from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import HomeLine from "../components/HomeLine";
import PricingCard from "../components/PricingCard";

const notify = (itemName, quantity) => {
  toast.success(`${quantity} ${itemName} added to your cart!`, {
    autoClose: 3000,
  });
};

const Pricing = () => {
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
            onClickHandler={() => notify("Large Box", 1)}
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
            onClickHandler={() => notify("Medium Box", 1)}
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
            onClickHandler={() => notify("Small Box", 1)}
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
            onClickHandler={() => notify("Bike Storage", 1)}
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
            onClickHandler={() => notify()}
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
            onClickHandler={() => notify("Twin Mattress Storage", 1)}
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
            onClickHandler={() => notify("Table Storage", 1)}
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
            onClickHandler={() => notify("Small TV Storage", 1)}
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
            onClickHandler={() => notify("Big TV Storage", 1)}
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
