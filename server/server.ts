import dotenv from "dotenv";
dotenv.config({});
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { sendEmailToClient } from "./lib/util/sendEmailToClient";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { iProduct } from "./lib/interfaces/product";
import { sendErrorResponse } from "./lib/interfaces/error";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("OK");
});

app.get("/products", async (req: Request, res: Response) => {
  const products: iProduct[] = await stripe.products.list({});
  res.status(200).send(products);
});

app.post(`/price`, async (req: Request, res: Response) => {
  const { id } = req.body;
  if (id) {
    const product: iProduct = await stripe.prices.retrieve(id);
    if (!product) {
      return sendErrorResponse(
        res,
        "Invalid ID",
        "ID did not match to a product"
      );
    }
    return res.status(200).send(product);
  }
  return sendErrorResponse(res, "No ID", "No ID was provided");
});

app.post("/checkout", async (req, res) => {
  try {
    const { lineOfItems, customerEmail } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      customer_email: customerEmail,
      line_items: lineOfItems,
      mode: "payment",
      success_url: `http://localhost:3000/cart?stripeStatus=success`, //Verify URL
      cancel_url: "http://localhost:3000/cart?stripeStatus=cancelled", //Verify URL
    });

    sendEmailToClient(customerEmail);

    return res.status(200).send({
      error: null,
      session_id: session.id,
    });
  } catch (err) {
    console.error(err);

    return res.status(400).send({
      error: "Error in processing checkout",
      session_id: null,
    });
  }
});

app.listen(PORT, () => {
  console.log("Server listening on Port " + PORT);
});
