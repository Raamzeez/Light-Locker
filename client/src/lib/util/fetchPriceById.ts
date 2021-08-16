import axios from "axios";
import { iPrice } from "../interfaces/price";

export const fetchPriceById = async (id: string): Promise<number> => {
  const response = await axios.post("http://localhost:5000/price", { id });
  if (response.status !== 200) {
    //Error handling
  }
  const data: iPrice = response.data;
  return data.unit_amount;
};
