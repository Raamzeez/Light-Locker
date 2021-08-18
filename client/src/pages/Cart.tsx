import axios from "axios";
import React, { FC, useState, useEffect } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
// import qs from "qs";
import CartItem from "../components/CartItem";
import { iCartItem } from "../lib/interfaces/cartItem";
import { calculateCost } from "../lib/util/calculateCost";
import { filterPrice } from "../lib/util/filterPrice";
import { generateLineOfItems } from "../lib/util/generateLineOfItems";
import { openInNewTab } from "../lib/util/openInNewTab";

interface iState {
  items: iCartItem[];
  updatedQuantity: number;
  updatedQuantityIndex: number;
  success: boolean;
  error: boolean | null;
}

const Cart: FC = () => {
  const history = useHistory();

  const [state, setState] = useState<iState>({
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items") as string)
      : [],
    updatedQuantity: 0,
    updatedQuantityIndex: 0,
    success: false,
    error: false,
  });

  useEffect(() => {
    setState({ ...state, items: [...filterPrice(state.items)] });
    // eslint-disable-next-line
  }, []);

  const onSubmit = async () => {
    const response = await axios.post(
      `http://localhost:5000/create-checkout-session`,
      { items: generateLineOfItems(state.items) }
    );
    if (response.status !== 200) {
      //Error handling
    }
    return openInNewTab(response.data);
  };

  const deleteItem = (index: number) => {
    // console.log(items);
    const copyOfItems = state.items;
    copyOfItems.splice(index, 1);
    // console.log(copyOfItems);
    localStorage.setItem("items", JSON.stringify(copyOfItems));
    setState({ ...state, items: [...copyOfItems] });
  };

  const clearCart = () => {
    localStorage.setItem("items", JSON.stringify([]));
    setState({ ...state, items: [] });
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
      {state.items.length > 0 && (
        <>
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
              {state.items.map((item: iCartItem, index: number) => {
                // console.log(item);
                return (
                  <CartItem
                    key={shortid()}
                    id={item.id}
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
                Total Cost: {"$" + calculateCost(state.items) / 100}{" "}
                <span className="text-muted" style={{ fontSize: 20 }}>
                  /month
                </span>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col />
            <Col />
            <Col>
              <div className="text-center">
                <Button
                  style={{ marginTop: 50, marginBottom: 50 }}
                  onClick={onSubmit}
                  className="checkoutButton"
                >
                  Checkout
                </Button>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <Button
                  style={{ marginTop: 50, marginBottom: 50 }}
                  onClick={clearCart}
                  className="clearButton"
                >
                  Clear
                </Button>
              </div>
            </Col>
            <Col />
            <Col />
          </Row>
        </>
      )}
      {state.items.length === 0 && (
        <Row>
          <Col>
            <h2 className="text-center" style={{ marginTop: 30 }}>
              You currently have no items in your cart. Click{" "}
              <span onClick={() => history.push("/pricing")}>here</span> to view
              our storage options!
            </h2>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Cart;
