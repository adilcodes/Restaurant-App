import React, { createContext } from "react";

const CartItemsContext = createContext();

export default function CartContext(props) {
  return (
    <CartItemsContext.Provider>
        {props.children}
    </CartItemsContext.Provider>
  )
}
