import React from "react";
import CartItem from "../components/CartItem";

export default function Cart() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mt-4 mx-auto">
                    <h3>Shopping Cart</h3>
                    <p>Total Items (3)</p>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mt-4 mx-auto p-3 bg-white rounded-3 cart-items-container">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        </div>
    </>
  )
}
