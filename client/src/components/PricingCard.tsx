import React, { FC, useState } from "react";
import { Card } from "react-bootstrap";

interface iProps {
  heading: string;
  subtext: string;
  classes: string;
  onClickHandler: React.MouseEventHandler;
}

const PricingCard: FC<iProps> = ({
  heading,
  subtext,
  classes,
  onClickHandler,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      style={{
        // width: "18rem",
        width: "80%",
        margin: "auto",
        marginTop: 30,
        marginBottom: 30,
      }}
      className={`roundedCorners shadow-sm borderless shadow clickable ${
        hover && "shadow-lg"
      } ${classes && classes}`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClickHandler}
    >
      <div className="text-center">
        <Card.Body>
          <Card.Title
            className="text-light"
            style={{
              fontSize: 100,
              fontFamily: "Roboto",
            }}
          >
            {heading}
          </Card.Title>
          <Card.Text className="text-light" style={{ fontSize: 20 }}>
            {subtext}
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

export default PricingCard;
