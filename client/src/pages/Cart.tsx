import React, { FC, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import shortid from "shortid";
import CartItem from "../components/CartItem";
import HomeLine from "../components/HomeLine";
import { iCartItem } from "../lib/interfaces/cartItem";
import { iProduct } from "../lib/interfaces/product";
import { fetchProduct } from "../lib/util/fetchProduct";

const Cart: FC = () => {
  const [items, setItems] = useState<iCartItem[] | []>(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items") as string)
      : []
  );

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
      <Row>
        <Col>
          <HomeLine />
        </Col>
      </Row>
      <Row>
        <Col>
          {items.map((item: iCartItem, index: number) => {
            // const itemID = filterProduct(item.name);
            // const response = await axios.post("http://localhost:5000/product", {
            //   id: itemID,
            // });
            // const itemData: iProduct = response.data;
            return (
              <CartItem
                key={shortid()}
                name={item.name}
                iconClass={item.iconClass}
                quantity={item.quantity}
                price={20}
                onDeleteHandler={() => deleteItem(index)}
              />
            );
          })}
        </Col>
      </Row>
    </>
  );
};

export default Cart;
