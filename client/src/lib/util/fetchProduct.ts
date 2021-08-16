import axios from "axios";
import { iProduct } from "../interfaces/product";

export const fetchProduct = async (itemName: string): Promise<iProduct> => {
  const response = await axios.get("http://localhost:5000/products", {
    validateStatus: () => true,
  });
  if (response.status !== 200) {
    //Error Handling
  }
  const products = response.data;
  console.log(products);
  const product = products.data.filter(
    (product: iProduct) => product.name === itemName
  )[0];
  return product;
};
