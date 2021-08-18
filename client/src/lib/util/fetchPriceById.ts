import axios from "axios";
import { iPrice } from "../interfaces/price";

export const fetchPriceById = async (priceID: string): Promise<number> => {
  const response = await axios.get(`http://localhost:5000/prices`);
  if (response.status !== 200) {
    //Error handling
  }
  const prices: iPrice[] = response.data.data;
  let foundPrice = 0;
  prices.forEach((price) => {
    if (price.id === priceID) {
      foundPrice = price.unit_amount;
    }
  });
  return foundPrice;
};
