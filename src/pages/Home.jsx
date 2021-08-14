import React from "react";
import HomeCard from "../components/HomeCard";
import HomeLine from "../components/HomeLine";

import { Row, Col } from "react-bootstrap";
import HomePoints from "../components/HomePoints";

const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <h1
            className="text-center animate__animated animate__fadeIn"
            style={{ marginTop: 30 }}
          >
            Light Locker
          </h1>
          <p
            className="text-center animate__animated animate__fadeInUp"
            style={{ marginTop: 15, fontSize: 20 }}
          >
            The easiest and cheapest way to move your stuff
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeLine />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeCard
            heading="Card Title"
            body="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
        <Col>
          <HomeCard
            heading="Card Title"
            body="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
        <Col>
          <HomeCard
            heading="Card Title"
            body="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeLine />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-center">Where are we located?</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.9817132921935!2d-71.22397898454619!3d42.385536041484954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39d36c9ba1a47%3A0x861ff9c80e2690aa!2sBentley%20University!5e0!3m2!1sen!2sus!4v1628829942874!5m2!1sen!2sus"
            width="70%"
            height="450"
            title="Bentley University Map"
            style={{
              border: 0,
              marginLeft: "15%",
              marginTop: 30,
              marginBottom: 30,
            }}
            allowfullscreen=""
            loading="lazy"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeLine />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-center">What about the competition?</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-center">
            <img
              src="data:image/png;base64,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"
              height={200}
              width={200}
              alt="Spaceship Logo"
              style={{ marginTop: 30 }}
            />
          </div>
          <HomePoints
            messages={[
              "Do Not Move Boxes for You",
              "1 Day Delay to Ship/Receive Boxes",
              "May take up to 5 days to receive shipping supplies",
            ]}
          />
        </Col>
        <Col>
          <div className="text-center">
            <img
              src="data:image/png;base64,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"
              height={200}
              width={200}
              alt="Spaceship Logo"
              style={{ marginTop: 30 }}
            />
          </div>
          <HomePoints
            messages={[
              "We Move the Boxes For You On The Same Day",
              "No Shipping Required - We Handle It",
              "No Supplies Needed By You",
            ]}
          />
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

export default Home;
