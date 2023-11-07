import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [cartNumber, setCartNumber] = useState(0);

  const addToCart = () => {
    setCartNumber((prevCount) => prevCount + 1);
  };

  const contextValue = {
    cartNumber,
    addToCart,
  };

  return (
    <>
      <CartContext.Provider value={contextValue}>
        {children}
      </CartContext.Provider>
    </>
  );
};


