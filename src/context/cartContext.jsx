import { createContext, useState } from "react";

export const CartContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
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
      <CartContext.Provider value={{ contextValue }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

// export function useCartContext() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCartContent should be within a themeContextProvider");
//   }

//   return context;
// }
