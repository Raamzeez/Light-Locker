import { toast } from "react-toastify";
import { iCartItem } from "../interfaces/cartItem";
import { fetchPriceByProductID } from "./fetchPriceByProductID";
import { fetchProductByName } from "./fetchProductByName";

export const addToCart = async (
  name: string,
  iconClass: string
): Promise<boolean> => {
  try {
    const itemsKey = localStorage.getItem("items");
    const items: iCartItem[] = itemsKey ? JSON.parse(itemsKey) : [];
    let foundItem = false;
    await Promise.all(
      items.map(async (item: iCartItem, i: number) => {
        if (item.name === name && !foundItem) {
          const product = await fetchProductByName(name);
          const productID = product.id;
          const priceID = await fetchPriceByProductID(productID);
          foundItem = true;
          let quantity = item.quantity;
          quantity++;
          items[i] = { id: productID, priceID, name, quantity, iconClass };
        }
      })
    );
    if (!foundItem) {
      const productID = (await fetchProductByName(name)).id;
      const priceID = await fetchPriceByProductID(productID);
      items.push({ id: productID, priceID, name, quantity: 1, iconClass });
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
