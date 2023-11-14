import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [cartNumber, setCartNumber] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? parseInt(storedCart, 10) : 0;
  });

  const updateCartVal = () => {
    setCartNumber((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    localStorage.setItem("cart", cartNumber.toString());
  }, [cartNumber]);

  const contextValue = {
    cartNumber,
    updateCartVal,
  };

  return (
    <>
      <CartContext.Provider value={contextValue}>
        {children}
      </CartContext.Provider>
    </>
  );
};
