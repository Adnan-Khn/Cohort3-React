/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const MyStore = createContext();

export const StoreProvider = ({ children }) => {
  const [isCart, setIsCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  return (
    <MyStore.Provider
      value={{
        isCart,
        setIsCart,
        cartItems,
        setCartItems,
        isCheckout,
        setIsCheckout,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
