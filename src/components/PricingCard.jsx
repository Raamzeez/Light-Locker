import React, { useState } from "react";

import { Card } from "react-bootstrap";

const PricingCard = () => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      style={{
        width: "18rem",
        margin: "auto",
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: "rgb(90, 207, 232)",
      }}
      className={`animate__animated animate__fadeIn roundedCorners ${
        hover && "shadow"
      } clickable borderless`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="text-center">
        <Card.Body>
          <Card.Title
            className="text-light"
            style={{ fontSize: 100, fontFamily: "Roboto" }}
          >
            $45
          </Card.Title>
          <Card.Text className="text-light" style={{ fontSize: 30 }}>
            Per Box
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

export default PricingCard;
