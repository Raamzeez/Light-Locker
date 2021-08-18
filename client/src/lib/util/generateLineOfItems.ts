import { iCartItem } from "../interfaces/cartItem";
import { iLineOfItems } from "../interfaces/LineOfItems";

export const generateLineOfItems = (items: iCartItem[]): iLineOfItems[] => {
  const lineOfItems: iLineOfItems[] = [];
  items.forEach((item) => {
    lineOfItems.push({
      // price_data: {
      //   currency: "usd",
      //   product_data: {
      //     name: item.name,
      //   },
      //   unit_amount: item.price ? item.price : 0,
      // },
      price: item.priceID,
      quantity: item.quantity,
    });
  });
  return lineOfItems;
};
