import { toast } from "react-toastify";
import { iCartItem } from "../interfaces/cartItem";
import { fetchProduct } from "./fetchProduct";

export const addToCart = async (
  name: string,
  iconClass: string
): Promise<boolean> => {
  try {
    const itemsKey = localStorage.getItem("items");
    const items = itemsKey ? JSON.parse(itemsKey) : [];
    let foundItem = false;
    items.forEach(async (item: iCartItem, index: number) => {
      if (item.name === name) {
        const productID = (await fetchProduct(name)).id;
        foundItem = true;
        let quantity = item.quantity;
        quantity++;
        items[index] = { id: productID, name, quantity, iconClass };
      }
    });
    const productID = (await fetchProduct(name)).id;
    if (!foundItem) {
      items.push({ id: productID, name, quantity: 1, iconClass });
    }
    localStorage.setItem("items", JSON.stringify(items));
    toast.success(`A ${name} added to your cart!`, {
      autoClose: 3000,
    });
    return true;
  } catch (err) {
    console.error(err);
    toast.error("Error - We were unable to add your item to the cart");
    return false;
  }
};
