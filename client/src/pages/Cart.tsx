import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import shortid from "shortid";
import CartItem from "../components/CartItem";
import { iCartItem } from "../lib/interfaces/cartItem";
import { calculateCost } from "../lib/util/calculateCost";
import { filterPrice } from "../lib/util/filterPrice";
import { generateLineOfItems } from "../lib/util/generateLineOfItems";
import { openInNewTab } from "../lib/util/openInNewTab";

const Cart: FC = () => {
  const [items, setItems] = useState<iCartItem[] | []>(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items") as string)
      : []
  );

  useEffect(() => {
    setItems([...filterPrice(items)]);
    // eslint-disable-next-line
  }, []);

  const onSubmit = async () => {
    const response = await axios.post(
      "http://localhost:5000/create-checkout-session",
      { items: generateLineOfItems(items) }
    );
    if (response.status !== 200) {
      //Error handling
    }
    return openInNewTab(response.data);
  };

  const deleteItem = (index: number) => {
    console.log(items);
    const copyOfItems = items;
    copyOfItems.splice(index, 1);
    console.log(copyOfItems);
    localStorage.setItem("items", JSON.stringify(copyOfItems));
    setItems([...copyOfItems]);
  };

  return (
    <>
      <Row>
        <Col>
          <h1
            className="text-center"
            style={{ marginTop: 30, marginBottom: 50 }}
          >
            Cart
          </h1>
        </Col>
      </Row>
      <Row>
        <Col lg={1}>
          <h3 className="text-center">Icon</h3>
        </Col>
        <Col lg={3}>
          <h3 className="text-center">Product Name</h3>
        </Col>
        <Col lg={2}>
          <h3 className="text-center">Quantity</h3>
        </Col>
        <Col lg={2}>
          <h3 className="text-center">USD Per Month</h3>
        </Col>
        <Col lg={4}></Col>
      </Row>
      <div className="cartBackground">
        <Row>
          <Col></Col>
          {items.map((item: iCartItem, index: number) => {
            console.log(item);
            return (
              <CartItem
                key={shortid()}
                name={item.name}
                iconClass={item.iconClass}
                quantity={item.quantity}
                price={item.price as number}
                onDeleteHandler={() => deleteItem(index)}
              />
            );
          })}
        </Row>
      </div>
      <Row>
        <Col>
          <h3 className="text-center" style={{ marginTop: 50 }}>
            Total Cost: {"$" + calculateCost(items) / 100}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-center">
            <Button
              style={{ marginTop: 20, marginBottom: 50 }}
              onClick={onSubmit}
            >
              Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
