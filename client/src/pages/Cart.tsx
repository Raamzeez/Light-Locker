import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import shortid from "shortid";
import qs from "qs";
import CartItem from "../components/CartItem";
import { iCartItem } from "../lib/interfaces/cartItem";
import { calculateCost } from "../lib/util/calculateCost";
import { filterPrice } from "../lib/util/filterPrice";
import { generateLineOfItems } from "../lib/util/generateLineOfItems";
import { openInNewTab } from "../lib/util/openInNewTab";
import { useLocation } from "react-router-dom";

interface iState {
  success: boolean;
  error: boolean | null;
}

const Cart: FC = () => {
  const location = useLocation();

  const [items, setItems] = useState<iCartItem[] | []>(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items") as string)
      : []
  );

  const [state, setState] = useState<iState>({ success: false, error: false });

  useEffect(() => {
    const { stripeStatus } = qs.parse(location.pathname);
    console.log(location.pathname);
    console.log(stripeStatus);
    if (stripeStatus === "success") {
      setState({ ...state, success: true });
    }
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

  const onCloseHandler = () => {
    setState({ ...state, success: false, error: false });
  };

  return (
    <>
      <Modal show={state.success} onHide={onCloseHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
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
              className="checkoutButton"
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
