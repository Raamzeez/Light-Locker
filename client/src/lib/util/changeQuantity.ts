import { iCartItem } from "../interfaces/cartItem";

export const changeQuantity = (quantity: number, itemID: string) => {
  const itemsInStorage: iCartItem[] = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items") as string)
    : [];
  console.log(itemsInStorage);
  itemsInStorage.forEach((item, index: number) => {
    if (item.id === itemID) {
      console.log("Item IDs matched");
      itemsInStorage[index].quantity = quantity;
    }
  });
  console.log(itemsInStorage);
  return localStorage.setItem("items", JSON.stringify(itemsInStorage));
};
