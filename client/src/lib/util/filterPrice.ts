import { iCartItem } from "../interfaces/cartItem";
import { iPrice } from "../interfaces/price";
import { fetchPriceById } from "./fetchPriceById";
import { fetchPrices } from "./fetchPrices";

export const filterPrice = (items: iCartItem[]) => {
  const copyOfItems = items;
  copyOfItems.forEach(async (item, index: number) => {
    const prices: iPrice[] = await fetchPrices();
    let priceID = "";
    prices.forEach((price) => {
      if (price.product === item.id) {
        priceID = price.id;
      }
    });
    const price = await fetchPriceById(priceID);
    copyOfItems[index].price = price;
  });
  return copyOfItems;
};
