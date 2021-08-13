import React from "react";
import HomeCard from "../components/HomeCard";
import HomeNavbar from "../components/HomeNavbar";
import HomeLine from "../components/HomeLine";

import { Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

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
            width="1000"
            height="450"
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
    </div>
  );
};

export default Home;
