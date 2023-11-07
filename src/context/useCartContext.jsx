import { useContext } from "react";
import { CartContext } from "./cartContext";

export const useCartContext = () => {
  return useContext(CartContext);
};
