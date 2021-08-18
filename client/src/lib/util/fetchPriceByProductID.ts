import axios from "axios";
import { iPrice } from "../interfaces/price";

export const fetchPriceByProductID = async (productID: string) => {
  const response = await axios.get("http://localhost:5000/prices");
  if (response.status !== 200) {
    return console.error(response.data);
  }
  const prices: iPrice[] = response.data.data;
  const filteredPrice = prices.filter(
    (price) => price.product === productID
  )[0];
  return filteredPrice.id;
};
