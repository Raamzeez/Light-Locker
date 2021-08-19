import { iCartItem } from "../interfaces/cartItem";

export const changeQuantity = (quantity: number, itemID: string) => {
  const itemsInStorage: iCartItem[] = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items") as string)
    : [];
  itemsInStorage.forEach((item, index: number) => {
    if (item.id === itemID) {
      itemsInStorage[index].quantity = quantity;
    }
  });
  return localStorage.setItem("items", JSON.stringify(itemsInStorage));
};
