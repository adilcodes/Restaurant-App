import React, { useContext, useEffect, useState } from "react";
import { CartItemsContext } from "../contextApi/CartContext";

export default function CartItem({ props }) {

    const { cart, setCart } = useContext(CartItemsContext);

    const [quantity, setQuantity] = useState(props.foodQuantity);

    useEffect(() => {
        setCart(cart.filter((cartItem) => {
            return cartItem.foodId === props.foodId ? cartItem.foodQuantity = quantity : cartItem.foodQuantity;
        }));  
    }, [quantity])


    return (
        <>
            <div className="col-md-11 mx-auto mb-4 p-2 cart-item rounded-3 d-flex flex-wrap justify-content-center align-items-center" id="cart-item-id">
                <div className="col-md-3 col-sm-3 col-6 text-center cart-item-img">
                    <img src={props.foodImg} alt={props.foodTitle} />
                </div>
                <div className="col-md-3 col-sm-3 col-6 cart-item-title">
                    <h4 className="m-0">{props.foodTitle}</h4>
                    <p className="m-0">{props.foodText.substring(0, 23)}...</p>
                </div>
                <div className="col-md-3 col-sm-3 col-6 mt-sm-0 mt-3 cart-item-quantity d-flex justify-content-center align-items-center gap-2">
                    <button
                        className="btn border-0 bg-white rounded-0 py-0 px-2 text-center"
                        onClick={() => {
                            return quantity > 0 ? setQuantity(quantity - 1) : quantity;
                        }}
                    >
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <input
                        type="text"
                        className="col-3 rounded-1 border-0 text-center"
                        value={props.foodQuantity}
                    />
                    <button
                        className="btn border-0 bg-white rounded-0 py-0 px-2 text-center"
                        onClick={() => {setQuantity(quantity + 1)}}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="col-md-2 col-sm-2 col-3 mt-sm-0 mt-3 text-center cart-item-price">
                    <h5 className="m-0">{props.foodQuantity * props.foodPrice} Rs</h5>
                </div>
                <div className="col-md-1 col-sm-1 col-3 mt-sm-0 mt-3 text-center cart-item-delete">
                    <button
                        className="btn border-0"
                        onClick={() => {
                            setCart(cart.filter((item) => {
                                return item.foodId !== props.foodId;
                            }));
                        }}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
