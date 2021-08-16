import axios from "axios";
import { iProduct } from "../interfaces/product";

export const fetchProduct = async (itemName: string): Promise<iProduct> => {
  const response = await axios.get("http://localhost:5000/products", {
    validateStatus: () => true,
  });
  if (response.status !== 200) {
    //Error Handling
  }
  const products: iProduct[] = response.data;
  const product = products.filter((product) => product.name === itemName)[0];
  return product;
};
