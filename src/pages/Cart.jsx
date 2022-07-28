import React, { useContext, useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { CartItemsContext } from "../contextApi/CartContext";

export default function Cart() {

    const { cart } = useContext(CartItemsContext);
    console.log(cart);
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal (
            cart.reduce((accumulator, cartItem) => {
                return accumulator + (cartItem.foodPrice * cartItem.foodQuantity);
            }, 0)
        )
    }, [cart]);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mt-4 mx-auto" id="cartPage-heading">
                        <h3>Shopping Cart</h3>
                        <p>Total Items ({cart.length})</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mt-4 mx-auto p-3 bg-white rounded-3 cart-items-container" id="cart-items-container-id">
                        {cart.length !== 0 ? (
                            <Scrollbars>
                                {cart.map((foodItem) => {
                                    return <CartItem key={foodItem.foodId} props={foodItem} />
                                })}
                            </Scrollbars>
                        ) : (
                            <p className="m-0 fs-5 text-center"> Cart is empty!! Add Some Food Here 🍲 </p>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mt-4 mx-auto d-flex flex-column align-items-end" id="cart-price-section">
                        <h4 className="mb-3"><span className="m-0 p-0 fw-semibold">Cart Total : </span>{total} Rs</h4>
                        <button className="btn btn-view-item border-1 rounded-0 fs-5 px-4">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
