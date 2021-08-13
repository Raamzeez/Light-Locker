import React from "react";
import { Card } from "react-bootstrap";

const HomeCard = ({ heading, body }) => {
  return (
    <div className="text-center">
      <Card
        className="roundedCorners shadow-sm"
        style={{ width: "18rem", margin: "auto", marginTop: 30 }}
      >
        <Card.Body>
          <Card.Title>{heading}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeCard;
