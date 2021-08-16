import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";

interface iProps {
  iconClass: string;
  fontSize?: number;
  name: string;
  price: number;
  quantity: number;
  onDeleteHandler: React.MouseEventHandler;
}

const CartItem: FC<iProps> = ({
  iconClass,
  fontSize,
  name,
  price,
  quantity,
  onDeleteHandler,
}) => {
  return (
    <>
      <Row>
        <Col lg={1}>
          <div className="text-center">
            <i
              className={iconClass}
              style={{
                fontSize: fontSize ? fontSize : 50,
                marginTop: 30,
                marginBottom: 30,
              }}
            />
          </div>
        </Col>
        <Col lg={3}>
          <h3 className="text-center" style={{ marginTop: 30 }}>
            {name}
          </h3>
        </Col>
        <Col lg={2}>
          <h3 className="text-center" style={{ marginTop: 30 }}>
            {quantity}
          </h3>
        </Col>
        <Col lg={2}>
          <h3 className="text-center" style={{ marginTop: 30 }}>
            ${price / 100}
          </h3>
        </Col>
        <Col lg={4}>
          <div className="text-center" style={{ marginTop: 30 }}>
            <i
              className="fas fa-times-circle clickable"
              style={{ fontSize: 35, color: "red" }}
              onClick={onDeleteHandler}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CartItem;
