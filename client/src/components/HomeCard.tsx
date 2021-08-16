import React, { FC } from "react";
import { Card } from "react-bootstrap";

interface iProps {
  heading: string;
  body: string;
}

const HomeCard: FC<iProps> = ({ heading, body }) => {
  return (
    <div className="text-center">
      <Card
        className="roundedCorners shadow-sm"
        style={{
          width: "18rem",
          margin: "auto",
          marginTop: 30,
          marginBottom: 30,
        }}
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
