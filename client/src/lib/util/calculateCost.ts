import { iCartItem } from "../interfaces/cartItem";

export const calculateCost = (items: iCartItem[]): number => {
  let totalCost = 0;
  items.forEach((item) => {
    totalCost += item.price ? item.price * item.quantity : 0;
  });
  return totalCost;
};
