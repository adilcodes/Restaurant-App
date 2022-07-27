import React from "react";
import CartItem from "../components/CartItem";
import { Scrollbars } from 'react-custom-scrollbars-2';

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
                    <Scrollbars>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </Scrollbars>
                </div>
            </div>
            <div className="row">
                <div className="col-10 mt-4 mx-auto d-flex flex-column align-items-end">
                    <h4 className="mb-3"><span className="m-0 p-0 fw-semibold">Cart Total : </span>2000 Rs</h4>
                    <button className="btn btn-view-item border-1 rounded-0 fs-5 px-4">Checkout</button>
                </div>
            </div>
        </div>
    </>
  )
}
