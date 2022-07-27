import React, { createContext, useState } from "react";

export const CartItemsContext = createContext();

export default function CartContext(props) {

  const [cart, setCart] = useState([]);

  return (
    <CartItemsContext.Provider value={{cart, setCart}}>
        {props.children}
    </CartItemsContext.Provider>
  )
}
