import axios from "axios";
import { iError } from "../interfaces/error";
import { iProduct } from "../interfaces/product";

export const fetchProductByName = async (
  itemName: string
): Promise<iProduct> => {
  const response = await axios.get(`http://localhost:5000/products`, {
    validateStatus: () => true,
  });
  if (response.status !== 200) {
    const error: iError = response.data;
    console.error(error);
  }
  const products = response.data;
  const product = products.data.filter(
    (product: iProduct) => product.name === itemName
  )[0];
  return product;
};
