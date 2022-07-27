import React, { useContext, useState } from "react";
import { CartItemsContext } from "../contextApi/CartContext";

export default function CartItem({ props }) {

    const { cart, setCart } = useContext(CartItemsContext);
    const [quantity, setQuantity] = useState(1);
    

    return (
        <>
            <div className="col-md-11 mx-auto mb-4 p-2 cart-item rounded-3 d-flex justify-content-center align-items-center">
                <div className="col-md-3 text-center cart-item-img">
                    <img src={props.foodImg} alt={props.foodTitle} />
                </div>
                <div className="col-md-3 cart-item-title">
                    <h4 className="m-0">{props.foodTitle}</h4>
                    <p className="m-0">{props.foodText.substring(0, 23)}...</p>
                </div>
                <div className="col-md-3 cart-item-quantity d-flex justify-content-center align-items-center gap-2">
                    <button
                    className="btn border-0 bg-white rounded-0 py-0 px-2 text-center"
                    onClick={() => {
                        quantity > 0 ? setQuantity(quantity-1) : setQuantity(0);
                    }}
                    >
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" className="col-3 rounded-1 border-0 text-center" value={quantity} />
                    <button
                    className="btn border-0 bg-white rounded-0 py-0 px-2 text-center"
                    onClick={() => {
                        setQuantity(quantity+1);
                    }}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="col-md-2 text-center cart-item-price">
                    <h5 className="m-0">{quantity * props.foodPrice} Rs</h5>
                </div>
                <div className="col-md-1 text-center cart-item-delete">
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
