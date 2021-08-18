import React, { FC, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { changeQuantity } from "../lib/util/changeQuantity";

interface iProps {
  iconClass: string;
  fontSize?: number;
  id: string;
  name: string;
  price: number;
  quantity: number;
  onDeleteHandler: React.MouseEventHandler;
}

const CartItem: FC<iProps> = ({
  iconClass,
  fontSize,
  id,
  name,
  price,
  quantity: quantityProp,
  onDeleteHandler,
}) => {
  const [quantity, setQuantity] = useState<number>(quantityProp);

  useEffect(() => {
    console.log("Changing quantity");
    changeQuantity(quantity, id);
    // eslint-disable-next-line
  }, []);

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
          <Form.Group>
            <Form.Control
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              style={{
                width: "4rem",
                margin: "auto",
                marginTop: 30,
              }}
            />
          </Form.Group>
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
