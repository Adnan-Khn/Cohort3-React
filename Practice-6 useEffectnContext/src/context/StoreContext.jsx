import { createContext, useState } from "react";

export const MyStore = createContext();

export const StoreProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isInCart, setIsInCart] = useState(null);
  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1}: item,
      ).filter((item) => item.quantity > 0),
      
    );
    setIsInCart(null)
  };
  const handleRemove = (id)=>{
    setCartItems((prev)=>
      prev.filter((item)=>item.id!==id)
    )
    setIsInCart(null)
  }
  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  return (
    <MyStore.Provider
      value={{
        toggle,
        setToggle,
        cartItems,
        setCartItems,
        handleDecrement,
        handleIncrement,
        isInCart,
        setIsInCart,
        handleRemove
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
